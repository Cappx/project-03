import { PageType } from '../../const';
import { Offers } from '../../types/offers';
import PlaceCardList from '../place-card-list/place-card-list';
import NearbyCardList from '../nearby-card-list/nearby-card-list';

type CardListProps = {
  cityOffers?: Offers;
  placesNearby?: Offers;
  onPlaceCardHover?: (placeCardId: number | null) => void;
  onScrollTop?: () => void;
  pageType: PageType;
}

export default function CardList({cityOffers, placesNearby, onPlaceCardHover, onScrollTop, pageType}: CardListProps): JSX.Element {
  const getComponentByType = (type: PageType) => {
    switch (type) {
      case PageType.Main:
        return (
          <PlaceCardList
            cityOffers={cityOffers}
            onPlaceCardHover={onPlaceCardHover}
          />
        );
      case PageType.Property:
        return (
          <NearbyCardList
            placesNearby={placesNearby}
            onScrollTop={onScrollTop}
          />
        );
    }
  };

  return (
    getComponentByType(pageType)
  );
}
