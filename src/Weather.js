import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";
import Footer from "./Footer";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                placeholder="  Type a city..."
                className="city"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="search" />
            </div>
            <div className="col-3">
              <button className="current-button">Current</button>
            </div>
          </div>
        </form>
        <span className="citty">{weatherData.city}</span>
        <span className="icon">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            width="120"
          />
        </span>
        <span className="temp">{Math.round(weatherData.temperature)}</span>
        <span className="units">
          <a href="/" className="active">
            °C
          </a>
          | <a href="/">°F</a>
        </span>
        <h2 className="description text-capitalize">
          {weatherData.description}
        </h2>
        <h1>
          <span>
            {" "}
            <FormattedDate date={weatherData.date} />
          </span>
        </h1>
        <ul>
          <li className="hum">
            Humidity:
            <span className="humidity">{Math.round(weatherData.humidity)}</span>
            %
          </li>
          <li className="wnd">
            Wind:<span className="wind">{Math.round(weatherData.wind)}</span>
            km/h
          </li>
        </ul>
        <Footer />
      </div>
    );
  } else {
    const apiKey = "017d56650cd168d68067850318775d43";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading....";
  }
}
