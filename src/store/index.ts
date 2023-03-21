import { reactive } from 'vue';
import { ICardData } from '../mockData';
// import { createStore } from 'vuex';

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   },
// });

interface IStore {
  movieDetails: ICardData,
  setMovieDetails(movie: ICardData): void
}

const store = reactive({
  movieDetails: {},
  setMovieDetails(movie) {
    this.movieDetails = movie;
  },
} as IStore);

export default store;
