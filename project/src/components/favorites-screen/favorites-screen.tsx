/* eslint-disable jsx-a11y/anchor-is-valid */
import FavoriteCardScreen from '../favorite-card-screen/favorite-card-screen';

function FavotitesScreen(): JSX.Element {
  return (
    <div className="page__favorites-container container">
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
              <FavoriteCardScreen />
              <FavoriteCardScreen />
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
              <FavoriteCardScreen />
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default FavotitesScreen;
