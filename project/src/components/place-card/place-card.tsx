import { Offer } from '../../types/offers';
import Card from '../card/card';

type PlaceCardProps = {
  offer: Offer;
  onPlaceCardHover?: (id: number | null) => void;
}

export default function PlaceCard(props: PlaceCardProps): JSX.Element {
  const { onPlaceCardHover, offer} = props;
  const { id } = offer;

  if (!onPlaceCardHover) {
    throw new Error ('Function onPlaceCardHover is`t implemented');
  }

  return (
    <article
      className={'cities__place-card place-card'}
      onMouseEnter={() => onPlaceCardHover(id)}
      onMouseLeave={() => onPlaceCardHover(null)}
    >
      <Card
        classNameWrapper={'cities__image-wrapper'}
        {...props}
      />
    </article>
  );
}
