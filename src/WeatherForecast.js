import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [load, setLoad] = useState(false);
  const [forecast, setForecast] = useState();

  useEffect(() => {
    setLoad(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoad(true);
    return console.log(response.data);
  }
  if (load) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = `3ba49e901d0tof3a381ffd812a82fa2e`;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
