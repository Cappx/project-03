import { Offers } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProps = {
  cityOffers: Offers;
  nearby: boolean;
  onPlaceCardHover: (placeCardId: number | null) => void;
}

function PlaceCardList({cityOffers, nearby, onPlaceCardHover}: PlaceCardListProps): JSX.Element {
  return (
    <div className={`${nearby ? 'near-places__list' : 'cities__places-list tabs__content'} places__list`}>
      {cityOffers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          nearby={nearby}
          onPlaceCardHover={onPlaceCardHover}
        />
      ))}
    </div>
  );
}

export default PlaceCardList;

