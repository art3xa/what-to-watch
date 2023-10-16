import {ReviewForm} from '@components/review-form/review-form.tsx';
import {Header} from '@components/header/header.tsx';
import {ReviewHeader} from '@components/header/review-header/review-header.tsx';
import {useParams} from 'react-router-dom';
import {NotFoundPage} from '@pages/not-found-page/not-found-page.tsx';
import {MyListPageProps} from '@pages/my-list-page/my-list-page.tsx';

type AddReviewPageProps = MyListPageProps;

export function AddReviewPage({films}: AddReviewPageProps) {
  const {id} = useParams();
  const filmId = Number(id);
  const film = films.at(filmId);

  return (
    film ?
      (
        <section className="film-card film-card--full">
          <div className="film-card__header">
            <div className="film-card__bg">
              <img src={film.background} alt={film.name}/>
            </div>

            <Header>
              <ReviewHeader film={film}/>
            </Header>

            <div className="film-card__poster film-card__poster--small">
              <img src={film.poster} alt={`${film.name} poster`} width="218" height="327"/>
            </div>
          </div>
          <ReviewForm />
        </section>
      ) :
      (
        <NotFoundPage/>
      )
  );
}
