import {Film} from 'types/film.ts';
import {store} from 'store';
import {User} from 'types/user.ts';
import {AuthStatus} from 'types/auth-status.ts';
import {Review} from 'types/review.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type DataState = {
  films: Film[];
  promoFilm: Film | null;
  currentGenre: string;
  similarFilms: Film[];
  favoriteFilms: Film[];
  filteredFilms: Film[];
  cardCount: number;
  isFilmsLoading: boolean;
  hasError: boolean;
}

export type UserState = {
  user: User | null;
  authStatus: AuthStatus;
}

export type FilmState = {
  film: Film | null;
  reviews: Review[];
}
