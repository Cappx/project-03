/* eslint-disable no-console */

import { Link } from 'react-router-dom';
import { CITIES } from '../../const';
import { Offers } from '../../types/offers';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoritesListProps = {
  favoritesList: Offers;
}

function FavoritesList({favoritesList}: FavoritesListProps): JSX.Element {
  const favoritesListFiltered = CITIES
    .map((el) => favoritesList.filter((item) => el === item.city.name))
    .filter((el) => el.length);
  console.log(favoritesListFiltered);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favoritesListFiltered.map((el, idx) => {
          const key = `${idx}-favorite`;
          return (
            <li key={key} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="#">
                    <span>{el[0].city.name}</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                {el.map((item) => <FavoriteCard offer={item} key={item.id} />)}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default FavoritesList;
