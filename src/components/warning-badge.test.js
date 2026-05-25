import { describe, it, expect, beforeEach, afterEach } from "vitest";

import "./warning-badge.js";

describe("WarningBadge", () => {
  let el;

  beforeEach(() => {
    el = document.createElement("warning-badge");

    document.body.append(el);
  });

  afterEach(() => {
    el.remove();
  });

  describe("registro y renderizado", () => {
    it("se registra como custom element", () => {
      expect(customElements.get("warning-badge")).toBeDefined();
    });

    it("renderiza el mensaje", () => {
      const badge = el.shadowRoot.querySelector("#badge");

      expect(badge.textContent.trim()).toBe("Sesión por expirar");
    });
  });

  describe("atributo reactivo pulsing", () => {
    it("agrega clase pulse cuando tiene atributo pulsing", () => {
      el.setAttribute("pulsing", "");

      const badge = el.shadowRoot.querySelector("#badge");

      expect(badge.classList.contains("pulse")).toBe(true);
    });

    it("remueve clase pulse cuando se elimina el atributo", () => {
      el.setAttribute("pulsing", "");

      el.removeAttribute("pulsing");

      const badge = el.shadowRoot.querySelector("#badge");

      expect(badge.classList.contains("pulse")).toBe(false);
    });
  });
});
