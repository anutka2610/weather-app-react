import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ raedy: false });
  const [city, setCity] = useState(props.city);
  function handleRespose(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      pressure: response.data.temperature.pressure,
      iconUrl: " https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apiKey = "3ba49e901d0tof3a381ffd812a82fa2e";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleRespose);
  }

  function handleSubmit(event) {
    event.prevenDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
    console.log(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCity}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading... ";
  }
}
