import { Fragment, useMemo } from 'react';
import { OfferModel } from '../../models/offer-model';
import OfferReviewSection from '../offer-review/offer-review-section';
import NearPlaceCardList from '../place-card/near-place-card-list';
import { OfferShortModel } from '../../models/offer-short-model';
import Map from '../map/map';
import Loader from '../loader/loader';
import { LocationModel } from '../../models/location-model';
import { Setting } from '../../configuration/consts';

type Props = {
  offer: OfferModel;
  nearbyOffers?: OfferShortModel[];
};

export default function Offer({ offer, nearbyOffers }: Props): JSX.Element {
  const limitedNearbyOffers = nearbyOffers?.slice(0, Setting.NEARBY_OFFERS_LIMIT);

  const offerLocations: [string, LocationModel][] = useMemo(
    () => {
      if (!limitedNearbyOffers) {
        return [[offer.id, offer.location]];
      }
      return [
        [offer.id, offer.location],
        ...limitedNearbyOffers.map((p) => [p.id, p.location])
      ] as [string, LocationModel][];
    },
    [offer, limitedNearbyOffers]
  );

  return (
    <Fragment>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offer.images.map((url) => (
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
            {offer.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {offer.title}
              </h1>
              <button className={`offer__bookmark-button ${offer.isFavorite ? 'offer__bookmark-button--active ' : ''}button`} type="button">
                <svg className="offer__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">{offer.isFavorite ? 'In' : 'To'} bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: `${offer.rating * 20}%` }} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">{offer.type}</li>
              <li className="offer__feature offer__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">€{offer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&#39;s inside</h2>
              <ul className="offer__inside-list">
                {offer.goods.map((g) => (
                  <li key={g} className="offer__inside-item">{g}</li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro ' : ''}user__avatar-wrapper`}>
                  <img
                    className="offer__avatar user__avatar"
                    src={offer.host.avatarUrl}
                    width={74}
                    height={74}
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">{offer.host.name}</span>
                {offer.host.isPro && <span className="offer__user-status">Pro</span>}
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {offer.description}
                </p>
              </div>
            </div>
            <OfferReviewSection />
          </div>
        </div>
        <Map
          type='offer'
          cityLocation={offer.city.location}
          offerLocations={offerLocations}
          selectedOfferId={offer.id}
        />
      </section>
      <div className="container">
        {!limitedNearbyOffers
          ? <Loader />
          : <NearPlaceCardList placeCards={limitedNearbyOffers} />}
      </div>
    </Fragment>
  );
}
