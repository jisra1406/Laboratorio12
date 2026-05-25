class UserDashboard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
     <style>

  .dashboard {
    display: grid;
    gap: 1rem;
    max-width: 500px;
    margin: 2rem auto;
    padding: 1rem;
    font-family: Arial, sans-serif;
  }

  @media (max-width: 600px) {

    .dashboard {
      max-width: 100%;
      padding: 0.5rem;
    }

  }

</style>

      <div class="dashboard" part="dashboard">

        <user-card></user-card>

        <weather-time></weather-time>

        <warning-badge></warning-badge>

      </div>
    `;
  }

  connectedCallback() {
    this.addEventListener("user-greet", () => {
      const badge = this.shadowRoot.querySelector("warning-badge");

      badge.setAttribute("pulsing", "");

      setTimeout(() => {
        badge.removeAttribute("pulsing");
      }, 5000);
    });
  }
}

customElements.define("user-dashboard", UserDashboard);
