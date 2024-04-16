import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

type NotFoundPageProps = {
  authorizationStatus: AuthorizationStatus;
  favoritesCount: number;
}

function NotFoundPage({authorizationStatus, favoritesCount}: NotFoundPageProps): JSX.Element {
  return (
    <>
      <Header authorizationStatus={authorizationStatus} favoritesCount={favoritesCount}/>
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Page 404</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">404</b>
              <b className="favorites__status">Page not found</b>
              <br />
              <Link to={AppRoute.Root}>Back to main page</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer isFavorite/>
    </>
  );
}

export default NotFoundPage;
