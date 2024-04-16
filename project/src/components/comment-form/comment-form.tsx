/* eslint-disable no-console */
import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { Ratings, Comment } from '../../types/comments';

const MIN_COMMENT_LENGTH = 10;

const userRatingData: Ratings = [
  {
    value: 5,
    title: 'perfect',
    checked: false
  },
  {
    value: 4,
    title: 'good',
    checked: false
  },
  {
    value: 3,
    title: 'not bad',
    checked: false
  },
  {
    value: 2,
    title: 'badly',
    checked: false
  },
  {
    value: 1,
    title: 'terribly',
    checked: false
  }
];

const userCommentData: Comment = {
  comment: '',
  rating: 0
};

type CommentFormProp = {
  onComment: (submitComment: Comment) => void;
}

function CommentForm({onComment}: CommentFormProp): JSX.Element {
  const [userRatings, setUserRatings] = useState(userRatingData);
  const [userComment, setUserComment] = useState(userCommentData);
  const userRating = userRatings.filter((el) => el.checked)[0] || null;

  // let isSubmitComment: boolean;
  const isSubmitComment = !(userComment.comment.length > MIN_COMMENT_LENGTH && userRating !== null);
  // console.log(userComment);
  // console.log(userRating);

  return (
    <form className="reviews__form form"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const submitComment = ({...userComment, rating: userRating.value});
        console.log(submitComment);
        // onComment(submitComment);
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {userRatings.map((star, idx) => {
          const key = `${idx}-rating`;
          return (
            <Fragment key={key}>
              <input className="form__rating-input visually-hidden" name="rating" type="radio"
                value={star.value}
                id={`${star.value}-stars`}
                checked={star.checked}
                onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                  const currentRating = ({...star, checked: target.checked});
                  setUserRatings([...userRatingData.slice(0, idx), currentRating, ...userRatingData.slice(idx + 1)]);
                }}
              />
              <label htmlFor={`${star.value}-stars`} className="reviews__rating-label form__rating-label" title={star.title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        value={userComment.comment}
        onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
          const currentComment = ({...userComment, comment: target.value});
          setUserComment(currentComment);
        }}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitComment}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
