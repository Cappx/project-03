import { useParams } from 'react-router-dom';
import { Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import { Comment } from '../../types/comments';
import { AuthorizationStatus, PageType} from '../../const';
import Map from '../../components/map/map';
import ReviewForm from '../../components/review-form/review-form';
import Header from '../../components/header/header';
import NotFoundPage from '../not-found-page/not-found-page';
import ReviewList from '../../components/review-list/review-list';
import CardList from '../../components/card-list/card-list';

const NEARBY_CARD_COUNT = 3;

type PlaceCardProps = {
  offers: Offers;
  reviews: Reviews;
  authorizationStatus: AuthorizationStatus;
  favoritesCount: number;
  onComment: (submitComment: Comment) => void;
}

export default function PropertyPage({offers, reviews, authorizationStatus, favoritesCount, onComment}: PlaceCardProps): JSX.Element {
  const params = useParams();

  if (!offers.length) {
    return <NotFoundPage authorizationStatus={authorizationStatus} favoritesCount={favoritesCount} />;
  }

  const offer = offers.filter((el) => el.id === Number(params.id))[0];
  const offerReviews = reviews.filter((el) => el.id === Number(params.id));
  const { isPremium, price, isFavorite, rating, type, title, bedrooms, maxAdults, goods, host } = offer;

  const cityOffers = offers
    .filter((el) => el.city.name === offer.city.name);

  const placesNearby = cityOffers
    .filter((el) => el.id !== offer.id)
    .slice(0, NEARBY_CARD_COUNT);

  const handleScrollTop = () => {
    let i = 1800;
    const int = setInterval(() => {
      window.scrollTo(0, i);
      i -= 180;
      if (i < 0) {clearInterval(int);}
    }, 10);
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
                  <span className="reviews__amount">{offerReviews.length}</span>
                </h2>
                <ReviewList
                  offerReviews={offerReviews}
                  rating={rating}
                />
                {authorizationStatus === AuthorizationStatus.Auth &&
                  <ReviewForm onComment={onComment} />}
              </section>
            </div>
          </div>
          <Map
            cityOffers={cityOffers}
            currentOffer={offer}
            pageType={PageType.Property}
          />
        </section>
        {placesNearby.length > 1 &&
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <CardList
                placesNearby={placesNearby}
                onScrollTop={handleScrollTop}
                pageType={PageType.Property}
              />
            </section>
          </div>}
      </main>
    </div>
  );
}
