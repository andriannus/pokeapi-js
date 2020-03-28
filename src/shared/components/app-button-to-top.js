import { css, html, LitElement } from "lit-element";

class ButtonToTop extends LitElement {
  static get styles() {
    return css`
      .Button-toTop {
        background-color: #363636;
        border: 1px solid transparent;
        border-radius: 4px;
        bottom: 30px;
        color: #f5f5f5;
        cursor: pointer;
        display: none;
        font-size: 1.25rem;
        line-height: 1.5;
        padding: calc(0.375em - 1px) 0.75em;
        position: fixed;
        right: 30px;
        text-align: center;
      }

      .Button-toTop:hover {
        box-shadow: 0 8px 6px -6px black;
      }

      .Button-toTop .Icon {
        height: 1.5em;
        width: 1.5em;
      }

      .Button-toTop .Icon:first-child:last-child {
        margin-left: calc(-0.375em - 1px);
        margin-right: calc(-0.375em - 1px);
      }

      .Icon {
        align-items: center;
        display: inline-flex;
        justify-content: center;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    window.onscroll = () => {
      const { body, documentElement } = document;
      const button = this.shadowRoot.getElementById("BtnBackToTop");

      if (body.scrollTop > 300 || documentElement.scrollTop > 300) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    };
  }

  backToTop() {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
        return;
      }

      window.scrollBy(0, scrollStep);
    }, 15);
  }

  render() {
    return html`
      <button
        class="Button-toTop"
        id="BtnBackToTop"
        type="button"
        @click=${() => this.backToTop()}
      >
        <span class="Icon">&#8657;</span>
      </button>
    `;
  }
}

customElements.define("app-button-to-top", ButtonToTop);
