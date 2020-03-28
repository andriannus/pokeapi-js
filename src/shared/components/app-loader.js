import { css, html, LitElement } from "lit-element";

class AppLoader extends LitElement {
  static get styles() {
    return css`
      .Loader-grid {
        width: 70px;
        height: 70px;
        margin: 5px auto;
      }

      .Loader-grid .Loader-cube {
        width: 33%;
        height: 33%;
        background-color: #bdbdbd;
        float: left;
        -webkit-animation: Loader-cubeGridScaleDelay 1.3s infinite ease-in-out;
        animation: Loader-cubeGridScaleDelay 1.3s infinite ease-in-out;
      }

      .Loader-grid .Loader-cube1 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
      }

      .Loader-grid .Loader-cube2 {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
      }

      .Loader-grid .Loader-cube3 {
        -webkit-animation-delay: 0.4s;
        animation-delay: 0.4s;
      }

      .Loader-grid .Loader-cube4 {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s;
      }

      .Loader-grid .Loader-cube5 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
      }

      .Loader-grid .Loader-cube6 {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
      }

      .Loader-grid .Loader-cube7 {
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
      }

      .Loader-grid .Loader-cube8 {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s;
      }

      .Loader-grid .Loader-cube9 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
      }

      @-webkit-keyframes Loader-cubeGridScaleDelay {
        0%,
        70%,
        100% {
          -webkit-transform: scale3D(1, 1, 1);
          transform: scale3D(1, 1, 1);
        }

        35% {
          -webkit-transform: scale3D(0, 0, 1);
          transform: scale3D(0, 0, 1);
        }
      }

      @keyframes Loader-cubeGridScaleDelay {
        0%,
        70%,
        100% {
          -webkit-transform: scale3D(1, 1, 1);
          transform: scale3D(1, 1, 1);
        }

        35% {
          -webkit-transform: scale3D(0, 0, 1);
          transform: scale3D(0, 0, 1);
        }
      }
    `;
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
