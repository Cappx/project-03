import { Offers } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProps = {
  cityOffers?: Offers;
  onPlaceCardHover?: (placeCardId: number | null) => void;
}

export default function PlaceCardList({cityOffers, onPlaceCardHover}: PlaceCardListProps): JSX.Element {

  if (!cityOffers) {
    cityOffers = [];
  }

  return (
    <div className={'cities__places-list tabs__content places__list'}>
      {cityOffers.map((offer, idx) => {
        const key = `${idx}-card`;
        return (
          <PlaceCard
            key={key}
            offer={offer}
            onPlaceCardHover={onPlaceCardHover}
          />
        );
      })}
    </div>
  );
}

