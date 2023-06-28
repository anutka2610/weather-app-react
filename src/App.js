import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Amsterdam" />
        <footer>
          <p>
            <a
              href="https://github.com/anutka2610/weather-app-react"
              target="_blank"
              rel="noreferrer"
            >
              Open source code on GitHub
            </a>
            , by{" "}
            <a
              href="https://dazzling-croquembouche-f0aa87.netlify.app/home.html"
              target="_blank"
              rel="noreferrer"
            >
              Hanna Oriekhova{" "}
            </a>
            from SheCode
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
