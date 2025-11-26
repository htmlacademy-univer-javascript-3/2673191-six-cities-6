import { Link } from 'react-router-dom';
import { AppRoute } from '../../app-route';
import MainPlaceCardList from '../../components/place-card/main-place-card-list';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import cities from '../../mocks/cities';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-map-dispatch';
import { selectCity } from '../../store/action';
import { useMemo, useState } from 'react';

export default function MainPage(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.selectedCity);
  const offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  const [activeOfferId, setActiveOfferId] = useState<string>();

  const filteredOffers = useMemo(
    () => offers.filter((o) => o.city.name === selectedCity.name),
    [selectedCity.name, offers]
  );

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList
            cities={cities}
            selectedCityName={selectedCity.name}
            onSelectCity={(city) => dispatch(selectCity(city))}
          />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <MainPlaceCardList
              totalCount={filteredOffers.length}
              cityName={selectedCity.name}
              placeCards={filteredOffers}
              onChangeActiveOfferId={setActiveOfferId}
            />
            <div className="cities__right-section">
              <Map
                type='cities'
                cityLocation={selectedCity.location}
                offerLocations={filteredOffers.map((p) => [p.id, p.location])}
                selectedOfferId={activeOfferId}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
