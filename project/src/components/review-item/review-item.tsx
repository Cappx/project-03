import { Review } from '../../types/reviews';

type ReviewItemProps ={
  review: Review;
  rating: number;
}

export default function ReviewItem({review, rating}: ReviewItemProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`img/${review.user.avatarUrl}`} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">{review.rating}</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={review.date}>
          {`${new Date(review.date).toLocaleString('en-us', {month: 'long', year: 'numeric'})}`}
        </time>
      </div>
    </li>
  );
}
