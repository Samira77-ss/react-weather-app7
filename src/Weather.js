import React from "react";
import "./Weather.css";
import Footer from "./Footer";
export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    temperature: 17,
    date: "Tue, Mar 28, 17:07 PM",
    description: "Clear",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 4,
  };
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="  Type a city..."
              className="city"
              autoComplete="off"
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
        <img src={weatherData.imgUrl} alt="clear" width="120" />
      </span>
      <span className="temp">{weatherData.temperature}</span>
      <span className="units">
        <a href="/" className="active">
          °C
        </a>
        | <a href="/">°F</a>
      </span>
      <h2 className="description">{weatherData.description}</h2>
      <h1>
        <span>{weatherData.date}</span>.
      </h1>
      <ul>
        <li className="hum">
          Humidity:<span className="humidity">{weatherData.humidity}</span>%
        </li>
        <li className="wnd">
          Wind:<span className="wind">{weatherData.wind}</span>km/h
        </li>
      </ul>
      <Footer />
    </div>
  );
}
