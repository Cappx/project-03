import { Offers } from '../../types/offers';
import NearbyCard from '../nearby-card/nearby-card';

type NearbyCardListProps = {
  placesNearby?: Offers;
  onScrollTop?: () => void;
}

export default function NearbyCardList({placesNearby, onScrollTop}: NearbyCardListProps): JSX.Element {

  if (!placesNearby) {
    placesNearby = [];
  }

  return (
    <div className={'near-places__list places__list'}>
      {placesNearby.map((offer, idx) => {
        const key = `${idx}-card`;
        return (
          <NearbyCard
            key={key}
            offer={offer}
            onScrollTop={onScrollTop}
          />
        );
      })}
    </div>
  );
}
