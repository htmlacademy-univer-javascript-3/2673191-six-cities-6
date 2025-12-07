import { OfferShortModel } from '../../models/offer-short-model';
import groupBy from '../../tools/group-by';
import Loader from '../loader/loader';
import PlaceCard from './place-card';

type Props = {
  offers?: OfferShortModel[];
};

export default function FavoritePlaceCardList({ offers }: Props): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      {!offers
        ? <Loader />
        :
        <ul className="favorites__list">
          {Object.entries(groupBy(offers, (c) => c.city.name)).map(([city, cards]) => (
            <li key={city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {cards.map((c) => (
                  <PlaceCard
                    variant='favorite'
                    key={c.id}
                    model={c}
                  />
                ))}
              </div>
            </li>
          )
          )}
        </ul>}
    </section>
  );
}
