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
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="weather"
                />
                <span className="temperature"> 18 </span>
                <span className="unit">C</span>
              </div>
              <div className="col-6">
                <ul>
                  <li>Precipitation</li>
                  <li>Humidity</li>
                  <li>Wind</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
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
