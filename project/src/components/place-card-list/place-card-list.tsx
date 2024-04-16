/* eslint-disable no-console */

import { useState } from 'react';
import { Offers } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProps = {
  offers: Offers;
  nearby: boolean;
}

function PlaceCardList({offers, nearby}: PlaceCardListProps): JSX.Element {
  const [placeCardHover, setPlaceCardHover] = useState(null);
  console.log(placeCardHover);

  return (
    <div className={`${nearby ? 'near-places__list' : 'cities__places-list tabs__content'} places__list`}>
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          nearby={nearby}
          setPlaceCardHoverHandler={setPlaceCardHover}
        />
      ))}
    </div>
  );
}

export default PlaceCardList;

// onMouseOver={({target}: MouseEventHandler<HTMLDivElement>)}
// onMouseOver={({target}: React.MouseEvent<Element>) => console.log(target)}
