import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <span className="citty">{props.data.city}</span>
      <span className="icon">
        <WeatherIcon code={props.data.icon} />
      </span>
      <span className="temp">{Math.round(props.data.temperature)}</span>
      <span className="units">
        <a href="/" className="active">
          °C
        </a>
        | <a href="/">°F</a>
      </span>
      <h2 className="description text-capitalize">{props.data.description}</h2>
      <h1>
        <span>
          {" "}
          <FormattedDate date={props.data.date} />
        </span>
      </h1>
      <ul>
        <li className="hum">
          Humidity:
          <span className="humidity">{Math.round(props.data.humidity)}</span>%
        </li>
        <li className="wnd">
          Wind:<span className="wind">{Math.round(props.data.wind)}</span>
          km/h
        </li>
      </ul>
    </div>
  );
}
