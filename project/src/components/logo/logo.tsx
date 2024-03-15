/* eslint-disable no-console */

import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

function Logo(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <div className="header__left">
      <Link
        className={`header__logo-link ${pathname === AppRoute.Root ? 'header__logo-link--active' : ''}`}
        to={AppRoute.Root}
      >
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </Link>
    </div>
  );
}

export default Logo;
