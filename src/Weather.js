import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ raedy: false });
  function handleRespose(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      pressure: response.data.temperature.pressure,
      iconUrl: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });

    console.log(response.data);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <main>
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <img
                    src={weatherData.iconUrl}
                    alt="{weatherData.description}"
                  />
                  <span className="temperature">
                    {" "}
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit">C</span>
                </div>
                <div className="col-6">
                  <ul>
                    <li>Pressure: {weatherData.pressure}</li>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {weatherData.wind} km/h</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    const apiKey = "3ba49e901d0tof3a381ffd812a82fa2e";
    let city = "Amsterdam";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleRespose);
    return "Loading... ";
  }
}
