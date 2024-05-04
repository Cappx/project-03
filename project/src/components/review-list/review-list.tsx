import { Reviews } from '../../types/reviews';
import ReviewItem from '../review-item/review-item';

type ReviewListProps= {
  offerReviews: Reviews;
  rating: number;
}

export default function ReviewsList({offerReviews, rating}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {offerReviews.map((review, idx) => {
        const key = `${idx}-review`;
        return (
          <ReviewItem key={key} review={review} rating={rating} />
        );
      })}
    </ul>
  );
}
