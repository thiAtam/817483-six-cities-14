import React, { ChangeEvent, useState } from 'react';
import { COMMENTS_LENGTH } from '../../const';

type CommentsType = {
  id?: number;
  user: {
    id: number;
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  comment: string;
  date: string;
}

function Form({comment, date, user}: CommentsType): JSX.Element {

  const [comments, setComment] = useState<string>('');
  const [rate, setRating] = useState<string | number>('');
  const isValid = comments.length >= COMMENTS_LENGTH && rate !== '';
  const ratingValue = ['5', '4', '3', '2', '1'];

  function onCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    return setComment(event.target.value);
  }

  function onRatingChange(event: ChangeEvent<HTMLInputElement>) {
    return setRating(event.target.value);
  }

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{user.id}</span></h2>
      <ul className="reviews__list">
        <li className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
            </div>
            <span className="reviews__user-name">
              {user.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: `${Number(rate) * 20}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {comment}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">{date}</time>
          </div>
        </li>
      </ul>
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {ratingValue.map((value) => (
            <React.Fragment key={value}>
              <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} onChange={onRatingChange} type="radio" checked={rate === value}/>
              <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ))}
        </div>
        <textarea className="reviews__textarea form__textarea" value={comments} onChange={onCommentChange} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={isValid}>Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Form;
