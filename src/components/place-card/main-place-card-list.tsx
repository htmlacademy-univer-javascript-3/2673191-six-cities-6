import { PlaceCardShortModel } from '../../models/place-card-short-model';
import PlaceCard from './place-card';

type PlaceCardListProps = {
  totalCount: number;
  cityName: string;
  placeCards: PlaceCardShortModel[];
  onChangeActiveOfferId: (offerId: string | undefined) => void;
};

export default function MainPlaceCardList({ totalCount, cityName, placeCards, onChangeActiveOfferId }: PlaceCardListProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{totalCount} places to stay in {cityName}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {placeCards.map((c) => (
          <PlaceCard
            variant='city'
            key={c.id}
            model={c}
            onMouseEnter={() => onChangeActiveOfferId(c.id)}
            onMouseLeave={() => onChangeActiveOfferId(undefined)}
          />
        ))}
      </div>
    </section>
  );
}
