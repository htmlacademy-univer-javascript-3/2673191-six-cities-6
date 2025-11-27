import { Fragment } from 'react';
import { OfferModel } from '../../models/offer-model';
import OfferReviewSection from '../offer-review/offer-review-section';
import NearPlaceCardList from '../place-card/near-place-card-list';
import { OfferShortModel } from '../../models/offer-short-model';
import Map from '../map/map';

type Props = {
  model: OfferModel;
  nearbyPlaceCards: OfferShortModel[];
};

export default function Offer({ model, nearbyPlaceCards }: Props): JSX.Element {
  return (
    <Fragment>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {model.images.map((url) => (
              <div key={url} className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src={url}
                  alt="Photo studio"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {model.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {model.title}
              </h1>
              <button className={`offer__bookmark-button ${model.isFavorite ? 'offer__bookmark-button--active ' : ''}button`} type="button">
                <svg className="offer__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">{model.isFavorite ? 'In' : 'To'} bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: `${model.rating * 20}%` }} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{model.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">{model.type}</li>
              <li className="offer__feature offer__feature--bedrooms">
                {model.bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {model.maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">€{model.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&#39;s inside</h2>
              <ul className="offer__inside-list">
                {model.goods.map((g) => (
                  <li key={g} className="offer__inside-item">{g}</li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className={`offer__avatar-wrapper ${model.host.isPro ? 'offer__avatar-wrapper--pro ' : ''}user__avatar-wrapper`}>
                  <img
                    className="offer__avatar user__avatar"
                    src={model.host.avatarUrl}
                    width={74}
                    height={74}
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">{model.host.name}</span>
                {model.host.isPro && <span className="offer__user-status">Pro</span>}
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {model.description}
                </p>
              </div>
            </div>
            <OfferReviewSection />
          </div>
        </div>
        <Map
          type='offer'
          cityLocation={nearbyPlaceCards[0].city.location}
          offerLocations={nearbyPlaceCards.map((p) => [p.id, p.location])}
          selectedOfferId={nearbyPlaceCards[0].id}
        />
      </section>
      <div className="container">
        <NearPlaceCardList placeCards={nearbyPlaceCards} />
      </div>
    </Fragment>
  );
}
