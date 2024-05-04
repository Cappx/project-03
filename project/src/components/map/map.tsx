import { useEffect, useRef } from 'react';
import { Offer, Offers } from '../../types/offers';
import { Icon, Marker } from 'leaflet';
import { PageType, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  cityOffers: Offers;
  selectedCardId?: number | null;
  currentOffer?: Offer | null;
  pageType: PageType;
}

export default function Map({cityOffers, selectedCardId, currentOffer, pageType}: MapProps): JSX.Element {
  const currentCityLocation = cityOffers[0].city.location;
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCityLocation);

  useEffect(() => {
    if (map) {
      cityOffers.forEach(({id, location}) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude
        });

        marker
          .setIcon(
            selectedCardId !== null && selectedCardId === id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });

      if (currentOffer) {
        const currentOfferMarker = new Marker({
          lat: currentOffer.location.latitude,
          lng: currentOffer.location.longitude
        });

        currentOfferMarker
          .setIcon(currentCustomIcon)
          .addTo(map);
      }
    }
  }, [map, cityOffers, selectedCardId, currentOffer]);


  return (
    <section
      className={`${pageType}__map map`}
      ref={mapRef}
    >
    </section>
  );
}
