class WeatherTime extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        .weather {
          border: 1px solid #ccc;
          padding: 1rem;
          border-radius: 12px;
          background: #f3f4f6;
        }

        h3 {
          margin: 0;
        }
      </style>

      <div class="weather" part="container">
        <h3 part="city">Liberia</h3>
        <p part="temperature">31 °C</p>
        <span part="condition">Sunny</span>
      </div>
    `;
  }
}

customElements.define("weather-time", WeatherTime);
