import { createStore } from "vuex";


//favorileri tutmak için state
export default createStore({
  state: {
    favorites: [],
  },
  mutations: {
    addFavorite(state, movie) {
      state.favorites.push(movie);
    },
    removeFavorite(state, movie) {
      state.favorites = state.favorites.filter((favorite) => favorite.id !== movie.id);
    },
  },
  actions: {
    addFavorite({ commit }, movie) {
      commit("addFavorite", movie);
    },
    removeFavorite({ commit }, movie) {
      commit("removeFavorite", movie);
    },
  },
  getters: {
    favorites(state) {
      return state.favorites;
    },
  },
});
