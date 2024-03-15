/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Nav(): JSX.Element {
  const isAuth = true;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={isAuth ? AppRoute.Favorites : AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {
              isAuth
                ? <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                : <span className="header__login">Sign in</span>
            }
          </Link>
        </li>
        {
          isAuth &&
          <li className="header__nav-item">
            <Link className="header__nav-link" to={AppRoute.Root}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        }
      </ul>
    </nav>
  );
}

export default Nav;
