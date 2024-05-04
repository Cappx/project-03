import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type HeaderProps = {
  authorizationStatus: AuthorizationStatus;
  favoritesCount: number;
}

export default function Header({authorizationStatus, favoritesCount}: HeaderProps): JSX.Element {
  const { pathname } = useLocation();
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className={`header__logo-link ${pathname === AppRoute.Root ? 'header__logo-link--active' : ''}`}
              to={AppRoute.Root}
            >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {pathname !== `${AppRoute.Root}${AppRoute.Login}` &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile"
                    to={isAuth
                      ? `${AppRoute.Root}${AppRoute.Favorites}`
                      : `${AppRoute.Root}${AppRoute.Login}`}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    {isAuth
                      ?
                      <>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        {favoritesCount ? <span className="header__favorite-count">{favoritesCount}</span> : ''}
                      </>
                      : <span className="header__login">Sign in</span>}
                  </Link>
                </li>
                {isAuth &&
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.Root}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>}
              </ul>
            </nav>}
        </div>
      </div>
    </header>
  );
}
