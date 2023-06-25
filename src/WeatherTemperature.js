import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState(`celsius`);

  function convertToFahrengheit(event) {
    event.preventDefault();
    setUnit("fahrengheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrengheitTemperature() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }
  if (unit === `celsius`) {
    return (
      <div>
        <span className="temperature"> {Math.round(props.celsius)}</span>
        <span className="unit">
          C |{" "}
          <a href="/" onClick={convertToFahrengheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature"> {fahrengheitTemperature()}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            C
          </a>{" "}
          | F
        </span>
      </div>
    );
  }
}
