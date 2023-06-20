import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-contol"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <main>
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="weather"
                />
                <strong> 18 C</strong>
              </div>
              <div className="col-6 text-left">
                <ul>
                  <li>Precipitation</li>
                  <li>Humidity</li>
                  <li>Wind</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6 text-right">
            <h1>Amsterdam</h1>
            <ul>
              <li>Monday, 23.00 </li>
              <li>cloudy</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
