import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from './app-route';
import { AuthorizationStatus } from './models/authorization-status';
import PrivateRoute from './components/private-route/private-route';
import MainPage from './pages/main-page/main-page';
import LoginPage from './pages/login-page/login-page';
import FavoritesPage from './pages/favorites-page/favorites-page';
import OfferPage from './pages/offer-page/offer-page';
import NotFoundPage from './pages/not-found-page/not-found-page';
import { PlaceCardModel } from './models/place-card-model';
import { PlaceCardShortModel } from './models/place-card-short-model';

type Props = {
  models: PlaceCardModel[];
  placeCards: PlaceCardShortModel[];
};

export default function App(props: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesPage placeCards={props.placeCards} />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<OfferPage models={props.models} nearbyPlaceCards={props.placeCards} />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
