class UserCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>

  .card {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 1rem;
    background: white;
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background: #1d4ed8;
  }

  @media (max-width: 600px) {

    .card {
      flex-direction: column;
      text-align: center;
    }

    button {
      width: 100%;
    }

  }

</style>

      <div class="card" part="card">
        <img
          part="avatar"
          src="https://i.pravatar.cc/150?img=12"
          alt="avatar"
        >

        <div>
          <h3 part="name">Alonso</h3>
          <p part="role">Profesor</p>
        </div>

        <button id="btnSaludar" part="button">
          Saludar
        </button>
      </div>
    `;
  }

  connectedCallback() {
    const button = this.shadowRoot.querySelector("#btnSaludar");

    button.addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("user-greet", {
          bubbles: true,
          composed: true,
          detail: {
            message: "Hola desde user-card",
          },
        }),
      );
    });
  }
}

customElements.define("user-card", UserCard);
