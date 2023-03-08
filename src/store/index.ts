import { createStore } from 'vuex';
import { ICardData, cardsData } from '../mockData';

interface State {
  cards: ICardData[];
  movieDetails: ICardData;
}

export default createStore<State>({
  state() {
    return {
      cards: cardsData,
      movieDetails: {} as ICardData,
    };
  },
  // getters: {
  // },
  mutations: {
    setMovieDetails(state, movie: ICardData) {
      state.movieDetails = movie;
    },
  },
  // actions: {},
  // modules: {},
});
