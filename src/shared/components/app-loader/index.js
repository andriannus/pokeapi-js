import { html, LitElement } from "lit-element";

import { loaderStyles } from "@/shared/components/app-loader/style";

class AppLoader extends LitElement {
  static get styles() {
    return loaderStyles;
  }

  render() {
    return html`
      <div class="Loader-grid">
        <div class="Loader-cube Loader-cube1"></div>
        <div class="Loader-cube Loader-cube2"></div>
        <div class="Loader-cube Loader-cube3"></div>
        <div class="Loader-cube Loader-cube4"></div>
        <div class="Loader-cube Loader-cube5"></div>
        <div class="Loader-cube Loader-cube6"></div>
        <div class="Loader-cube Loader-cube7"></div>
        <div class="Loader-cube Loader-cube8"></div>
        <div class="Loader-cube Loader-cube9"></div>
      </div>
    `;
  }
}

customElements.define("app-loader", AppLoader);
