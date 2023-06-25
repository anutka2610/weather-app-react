import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <main>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <img src={props.data.iconUrl} alt={props.data.description} />

              <WeatherTemperature celsius={props.data.temperature} />
             
            </div>
            <div className="col-6">
              <ul>
                <li>Pressure: {props.data.pressure}</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
