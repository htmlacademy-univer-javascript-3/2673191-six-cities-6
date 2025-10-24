import { PlaceCardShortModel } from '../../models/place-card-short-model';
import PlaceCard from '../place-card/place-card';

type NearPlaceCardListProps = {
  placeCards: PlaceCardShortModel[];
};

export default function NearPlaceCardList({ placeCards }: NearPlaceCardListProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {placeCards.map((c) =>
          (
            <PlaceCard
              variant='nearby'
              key={c.id}
              model={c}
            />
          ))}
      </div>
    </section>
  );
}
