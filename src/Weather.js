import React from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const apiKey = "3ba49e901d0tof3a381ffd812a82fa2e";
  let city = "Amsterdam";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
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
