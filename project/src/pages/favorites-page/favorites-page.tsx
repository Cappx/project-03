import { Offers } from '../../types/offers';
import { AuthorizationStatus } from '../../const';
import Header from '../../components/header/header';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';

type FavoritesPageProps = {
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
  favoritesCount: number;
}

function FavoritesPage({offers, authorizationStatus, favoritesCount}: FavoritesPageProps): JSX.Element {
  const placeFavorites = offers.filter((el) => el.isFavorite);
  const isFavorite = Boolean(placeFavorites.length);

  return (
    <div className={`page ${isFavorite ? '' : 'page--favorites-empty'}`}>
      <Header authorizationStatus={authorizationStatus} favoritesCount={favoritesCount}/>
      <main className={`page__main page__main--favorites ${isFavorite ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {isFavorite
            ?
            <FavoritesList favoritesList={placeFavorites}/>
            :
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>}
        </div>
      </main>
      <Footer isFavorite={isFavorite} />
    </div>
  );
}

export default FavoritesPage;
