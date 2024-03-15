/* eslint-disable no-console */

import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type FooterProps = {
  isFavorites: boolean;
}

function Footer({isFavorites}: FooterProps): JSX.Element {
  console.log(isFavorites);

  return (
    <footer className={`footer ${isFavorites ? 'container' : ''}`}>
      <Link className="footer__logo-link" to={AppRoute.Root}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </Link>
    </footer>
  );
}

export default Footer;
