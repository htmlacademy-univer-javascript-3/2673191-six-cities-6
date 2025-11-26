import { Link, Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../app-route';
import { PlaceCardShortModel } from '../../models/place-card-short-model';
import { PlaceCardModel } from '../../models/place-card-model';
import Offer from '../../components/offer/offer';

type Props = {
  models: PlaceCardModel[];
  nearbyPlaceCards: PlaceCardShortModel[];
};

export default function OfferPage({ models, nearbyPlaceCards }: Props): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const model = models.filter((m) => m.id === id)[0];
  if (!model) {
    return <Navigate to={AppRoute.Root} />;
  }
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Root}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
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
      <main className="page__main page__main--offer">
        <Offer model={model} nearbyPlaceCards={nearbyPlaceCards} />
      </main>
    </div>
  );
}
