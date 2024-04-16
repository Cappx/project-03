/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-console */

import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offers';

type PlaceCardProps = {
  offer: Offer;
  nearby: boolean;
  setPlaceCardHoverHandler: Function;
}

function PlaceCard({offer, nearby, setPlaceCardHoverHandler}: PlaceCardProps): JSX.Element {
  const { id, isPremium, previewImage, price, isFavorite, rating, type, title } = offer;

  return (
    <article
      className={`${nearby ? 'near-places__card' : 'cities__place-card'} place-card`}
      onMouseOver={() => setPlaceCardHoverHandler(id)}
      // onMouseOut={() => setPlaceCardHoverHandler(null)}
    >
      {isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Root}${AppRoute.Property}/${id}`}>
          <img className="place-card__image" src={`img/${previewImage}`} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{`${isFavorite ? 'In' : 'To'} bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">ating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Root}${AppRoute.Property}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
