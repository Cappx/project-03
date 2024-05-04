import { Offer } from '../../types/offers';
import Card from '../card/card';

type NearbyCardProps = {
  offer: Offer;
  onScrollTop?: () => void | undefined;
}

export default function NearbyCard(props: NearbyCardProps): JSX.Element {
  const {onScrollTop} = props;

  if (!onScrollTop) {
    throw new Error ('Function onScrollTop is`t implemented');
  }

  return (
    <article
      className={'near-places__card place-card'}
      onClick={() => onScrollTop()}
    >
      <Card
        classNameWrapper={'near-places__image-wrapper'}
        {...props}
      />
    </article>
  );
}
