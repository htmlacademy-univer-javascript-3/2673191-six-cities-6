import { CityModel } from '../../models/city';

type CityListProps = {
  cities: CityModel[];
  selectedCityName: string;
  onSelectCity: (city: CityModel) => void;
};

export default function CityList({ cities, selectedCityName, onSelectCity }: CityListProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li key={city.name} className="locations__item">
            <a
              className={`locations__item-link tabs__item${city.name === selectedCityName ? ' tabs__item--active' : ''}`}
              href="#"
              onClick={() => onSelectCity(city)}
            >
              <span>{city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
