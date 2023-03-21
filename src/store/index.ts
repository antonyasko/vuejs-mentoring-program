import { createStore } from 'vuex';
import { ICardData } from '../mockData';

type SearchBy = 'title' | 'genre';
type SortBy = 'releaseDate' | 'rating';

type ICard = Omit<ICardData, 'genres' | 'ratings'> & {
  genre: string;
  rating: number;
};

export interface State {
  cardsData: ICardData[];
  movieDetails: ICard;
  searchValue: string;
  searchBy: SearchBy;
  sortBy: SortBy;
}

const store = createStore<State>({
  state() {
    return {
      cardsData: [],
      movieDetails: {} as ICard,
      searchValue: '',
      searchBy: 'title',
      sortBy: 'releaseDate',
    };
  },
  getters: {
    getCards({
      cardsData, searchValue, searchBy, sortBy,
    }) {
      const preparedCards: ICard[] = cardsData.map((card) => ({
        ...card,
        rating: card.ratings.reduce((s, c) => s + c, 0) / card.ratings.length,
        genre: card.genres.join(', '),
      }));

      preparedCards.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1));

      return searchValue
        ? preparedCards.filter(
          (card) => card[searchBy].toLowerCase().includes(
            searchValue.trim().toLowerCase(),
          ),
        )
        : preparedCards;
    },
  },
  mutations: {
    setMovieDetails(state, movie: ICard) {
      state.movieDetails = movie;
    },
    setSearchBy(state, searchBy: SearchBy) {
      state.searchBy = searchBy;
    },
    setSortBy(state, sortBy: SortBy) {
      state.sortBy = sortBy;
    },
    setSearchValue(state, searchValue: string) {
      state.searchValue = searchValue;
    },
    setCardsData(state, cardsData: ICardData[]) {
      state.cardsData = cardsData;
    },
  },
  actions: {
    fetchAllMovies(context) {
      return fetch('https://tame-erin-pike-toga.cyclic.app/movies')
        .then((response) => response.json())
        .then((data: ICardData[]) => {
          context.commit('setCardsData', data);
        })
        .catch((err) => console.error(err));
    },
  },
  // modules: {},
});

export default store;
