import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import PropertyPage from '../../pages/property-page/property-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
// import ScrollToTop from '../scroll-to-top/scroll-to-top';

type AppProps = {
  cardCount: number;
  offers: Offers;
  reviews: Reviews;
}

export default function App({cardCount, offers, reviews}: AppProps): JSX.Element {
  const authorizationStatus = AuthorizationStatus.Auth;
  const favoritesCount = offers.filter((offer) => offer.isFavorite).length;

  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
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
              <FavoritesPage
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
