/* eslint-disable no-console */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import FavotitesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import PropertyPage from '../../pages/property-page/property-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';

type AppProps = {
  cardCount: number;
  offers: Offers;
  reviews: Reviews;
}

function App({cardCount, offers, reviews}: AppProps): JSX.Element {
  const authorizationStatus = AuthorizationStatus.Auth;
  const favoritesCount = offers.filter((el) => el.isFavorite).length;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage
              cardCount={cardCount}
              offers={offers}
              authorizationStatus={authorizationStatus}
              favoritesCount={favoritesCount}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <LoginPage
              authorizationStatus={authorizationStatus}
              favoritesCount={favoritesCount}
            />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavotitesPage
                offers={offers}
                authorizationStatus={authorizationStatus}
                favoritesCount={favoritesCount}
              />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Property}>
          <Route
            path={AppRoute.PropertyId}
            element={
              <PropertyPage
                offers={offers}
                reviews={reviews}
                authorizationStatus={authorizationStatus}
                favoritesCount={favoritesCount}
                onComment={() => {
                  throw new Error('Function \'onAnswer\' isn\'t implemented.');
                }}
              />
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <NotFoundPage
              authorizationStatus={authorizationStatus}
              favoritesCount={favoritesCount}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
