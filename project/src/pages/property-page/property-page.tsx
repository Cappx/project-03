/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Offer, Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import { Comment } from '../../types/comments';
import { AuthorizationStatus} from '../../const';
import CommentForm from '../../components/comment-form/comment-form';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Header from '../../components/header/header';
import NotFoundPage from '../not-found-page/not-found-page';

const NEARBY_CARD_COUNT = 3;

type PlaceCardProps = {
  offers: Offers;
  reviews: Reviews;
  authorizationStatus: AuthorizationStatus;
  favoritesCount: number;
  onComment: (submitComment: Comment) => void;
}

function PropertyPage({offers, reviews, authorizationStatus, favoritesCount, onComment}: PlaceCardProps): JSX.Element {
  const params = useParams();
  const [selectedCard, setSelectedCard] = useState<Offer | undefined>(undefined);

  if (!offers.length) {
    return <NotFoundPage authorizationStatus={authorizationStatus} favoritesCount={favoritesCount} />;
  }

  const offer = offers.filter((el) => el.id === Number(params.id))[0];
  const { isPremium, price, isFavorite, rating, type, title, bedrooms, maxAdults, goods, host } = offer;
  const placeReviews = reviews.filter((el) => el.id === Number(params.id));
  console.log(offers);

  const placesNearby = offers
    .filter((el) => el.city.name === offer.city.name && el.id !== offer.id)
    .slice(0, NEARBY_CARD_COUNT);
  console.log(placesNearby);

  // console.log(offer);
  // console.log(placeReviews);

  const onPlaceCardHover = (placeCardId: number | null) => {
    const currentPlaceCard = offers.find((cityOffer) => cityOffer.id === placeCardId);
    setSelectedCard(currentPlaceCard);
  };

  return (
    <div className="page">
      <Header authorizationStatus={authorizationStatus} favoritesCount={favoritesCount}/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((el, idx) => {
                const key = `${idx}-image`;
                return (
                  <div key={key} className="property__image-wrapper">
                    <img className="property__image" src={`img/${el}`} alt={`Studio: ${title}`} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button className={`property__bookmark-button ${isFavorite ? 'property__bookmark-button--active' : ''} button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{`${isFavorite ? 'In' : 'To'} bookmarks`}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{type}</li>
                <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
                <li className="property__feature property__feature--adults">Max {maxAdults} adults</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, idx) => {
                    const key = `${idx}-good`;
                    return (
                      <li key={key} className="property__inside-item">{good}</li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={`img/${offer.host.avatarUrl}`} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">{offer.host.name}</span>
                  {offer.host.isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">{offer.description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot;
                  <span className="reviews__amount">{placeReviews.length}</span>
                </h2>
                <ul className="reviews__list">
                  {placeReviews.map((review, idx) => {
                    const key = `${idx}-review`;
                    return (
                      <li key={key} className="reviews__item">
                        <div className="reviews__user user">
                          <div className="reviews__avatar-wrapper user__avatar-wrapper">
                            <img className="reviews__avatar user__avatar" src={`img/${review.user.avatarUrl}`} width="54" height="54" alt="Reviews avatar" />
                          </div>
                          <span className="reviews__user-name">{review.user.name}</span>
                        </div>
                        <div className="reviews__info">
                          <div className="reviews__rating rating">
                            <div className="reviews__stars rating__stars">
                              <span style={{width: `${rating * 20}%`}}></span>
                              <span className="visually-hidden">{review.rating}</span>
                            </div>
                          </div>
                          <p className="reviews__text">{review.comment}</p>
                          <time className="reviews__time" dateTime={review.date}>{`${new Date(review.date).toLocaleString('en-us', {month: 'long'})} ${new Date(review.date).getFullYear()}`}</time>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                {authorizationStatus === AuthorizationStatus.Auth && <CommentForm onComment={onComment} />}
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceCardList cityOffers={placesNearby} nearby onPlaceCardHover={onPlaceCardHover}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyPage;
