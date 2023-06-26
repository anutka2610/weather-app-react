import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    const date = new Date(props.data.time);
    const day = date.getDay();

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fry", "Sat"];
    return days[day];
  }
  return (
    <div clsssName="row">
      <div className="col">
        <div>{day()}</div>
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        ></img>
        <div>
          <span className="WeatherForecast-max">
            {Math.round(props.data.temperature.maximum)}
          </span>
          /
          <span className="WeatherForecast-min">
            {Math.round(props.data.temperature.minimum)}
          </span>
        </div>
      </div>
    </div>
  );
}
