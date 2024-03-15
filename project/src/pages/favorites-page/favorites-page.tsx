/* eslint-disable jsx-a11y/anchor-is-valid */

import Logo from '../../components/logo/logo';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import FavoriteCard from '../../components/favorite-card/favorite-card';

function FavotitesPage(): JSX.Element {
  const isFavorites = true;

  return (
    <div className={`page ${isFavorites ? '' : 'page--favorites-empty'}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <Nav />
          </div>
        </div>
      </header>

      <main className={`page__main page__main--favorites ${isFavorites ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {
            isFavorites
              ?
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  <li className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>Amsterdam</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <FavoriteCard />
                      <FavoriteCard />
                    </div>
                  </li>

                  <li className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>Cologne</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      <FavoriteCard />
                    </div>
                  </li>
                </ul>
              </section>
              :
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </section>
          }
        </div>
      </main>
      <Footer isFavorites={isFavorites} />
    </div>
  );
}

export default FavotitesPage;
