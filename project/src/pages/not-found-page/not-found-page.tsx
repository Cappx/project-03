import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import Nav from '../../components/nav/nav';
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <Nav />
          </div>
        </div>
      </header>

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

      <Footer isFavorites/>
    </>
  );
}

export default NotFoundPage;
