import { html, nothing, render } from "lit-html";

import "@/shared/components/app-button-to-top";
import "@/shared/components/app-loader";
import pokemonService from "@/shared/services/pokemon.service";

import logo from "@/assets/images/pokeapi.png";

const { state$, fetchPagedPokemons } = pokemonService();
const root = document.getElementById("root");

const AppNavbar = html`
  <nav
    aria-label="main navigation"
    class="navbar is-fixed-top"
    role="navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src=${logo} alt="Poke API" />
        </a>
      </div>
    </div>
  </nav>
`;

const Loader = html`
  <div class="py-5">
    <app-loader></app-loader>
  </div>
`;

const loadMoreButton = ({ loading, pagedPokemon }) => {
  if (!pagedPokemon.next) return nothing;
  if (loading.isLoadMore) return Loader;

  return html`
    <div class="has-text-centered py-5">
      <button
        class="button is-dark"
        type="button"
        @click=${() => fetchPagedPokemons(pagedPokemon.next)}
      >
        Load More
      </button>
    </div>
  `;
};

const pokemonList = (pagedPokemon) => {
  return html`
    <article class="panel is-shadowless is-radiusless mb-0">
      ${pagedPokemon.results.map((pokemon) => {
        return html`
          <div class="panel-block is-capitalized is-radiusless py-3">
            <span class="panel-icon">
              &#10095;
            </span>

            ${pokemon.name}
          </div>
        `;
      })}
    </article>
  `;
};

const pokemon = (homeState) => {
  const { loading, pagedPokemon } = homeState;

  return html`
    ${loading.isFetchPagedPokemons ? Loader : pokemonList(pagedPokemon)}
    ${loadMoreButton(homeState)}
  `;
};

const banner = ({ loading, pagedPokemon }) => {
  return html`
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Pokemon</h1>

          <h2 class="subtitle">
            ${loading.isFetchPagedPokemons
              ? "Loading..."
              : `${pagedPokemon.count} Found`}
          </h2>
        </div>
      </div>
    </section>
  `;
};

const content = (homeState) => {
  return html`
    ${AppNavbar}

    <div id="Main" class="container has-background-white">
      ${banner(homeState)} ${pokemon(homeState)}
    </div>

    <app-button-to-top></app-button-to-top>
  `;
};

fetchPagedPokemons();

state$.subscribe((response) => {
  render(content(response), root);
});
