import { BehaviorSubject } from "rxjs";

import apiService from "@/shared/services/api.service";

const pokemonService = () => {
  const { baseApi } = apiService();

  const store = {
    loading: {
      isFetchPagedPokemons: false,
      isLoadMore: false,
    },
    errorMessage: {
      fetchPagedPokemons: "",
    },
    pagedPokemon: {
      count: 0,
      next: "",
      previous: "",
      results: [],
    },
  };
  const dispatcher = new BehaviorSubject(store);
  const state$ = dispatcher.asObservable();

  const setStore = (obj) => {
    const data = Object.assign(store, obj);

    dispatcher.next(data);
  };

  const fetchPagedPokemons = async (url) => {
    const baseUrl = url || "pokemon";
    const selectedLoading = url ? "isLoadMore" : "isFetchPagedPokemons";

    setStore({
      ...store,
      loading: {
        ...store.loading,
        [selectedLoading]: true,
      },
    });

    try {
      const response = await baseApi.get(baseUrl);
      const { data } = response;

      let pagedPokemon = data;

      if (url) {
        const updatedResults = [...store.pagedPokemon.results, ...data.results];

        pagedPokemon = {
          ...data,
          results: updatedResults,
        };
      }

      setStore({
        ...store,
        errorMessage: {
          ...store.errorMessage,
          fetchPagedPokemons: ''
        },
        pagedPokemon,
      });
    } catch (error) {
      setStore({
        ...store,
        errorMessage: {
          ...store.errorMessage,
          fetchPagedPokemons: 'Something Wrong'
        }
      });
    } finally {
      setStore({
        ...store,
        loading: {
          ...store.loading,
          [selectedLoading]: false,
        },
      });
    }
  };

  return { state$, fetchPagedPokemons };
};

export default pokemonService;
