/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from 'react-router-dom';
import { Setting } from '../../const';

function Tabs(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Setting.CITIES.map((city, idx) => {
            const key = `${idx}-city`;
            const cityActive = 3;
            return (
              <li key={key} className="locations__item">
                <Link
                  className={`locations__item-link tabs__item ${cityActive === idx ? 'tabs__item--active' : ''}`}
                  to={city.toLowerCase()}
                >
                  <span>{city}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
