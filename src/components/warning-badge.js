class WarningBadge extends HTMLElement {
  static get observedAttributes() {
    return ["pulsing"];
  }

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>

        .badge {
          background: crimson;
          color: white;
          padding: 1rem;
          border-radius: 12px;
          font-weight: bold;
          text-align: center;
        }

        .pulse {
          animation: pulse 1s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }

          50% {
            transform: scale(1.05);
            opacity: 0.7;
          }

          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

      </style>

      <div class="badge" id="badge" part="badge">
        Sesión por expirar
      </div>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "pulsing") {
      const badge = this.shadowRoot.querySelector("#badge");

      if (this.hasAttribute("pulsing")) {
        badge.classList.add("pulse");
      } else {
        badge.classList.remove("pulse");
      }
    }
  }
}

customElements.define("warning-badge", WarningBadge);
