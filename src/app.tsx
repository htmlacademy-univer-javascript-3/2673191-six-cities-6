import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from './app-route';
import MainPage from './pages/main-page/main-page';
import LoginPage from './pages/login-page/login-page';
import FavoritesPage from './pages/favorites-page/favorites-page';
import OfferPage from './pages/offer-page/offer-page';
import NotFoundPage from './pages/not-found-page/not-found-page';

type AppProps = {
  mainPagePlaceCardsPerPage: number;
};

export default function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage placeCardsPerPage={props.mainPagePlaceCardsPerPage}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesPage/>}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage/>}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
