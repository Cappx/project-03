/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from 'react-router-dom';
import { CITIES } from '../../const';

type TabsProps = {
  activeTab: string;
  onActiveTab: (city: string) => void;
}

function Tabs({activeTab, onActiveTab}: TabsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city, idx) => {
            const key = `${idx}-city`;
            return (
              <li key={key} className="locations__item" onClick={() => onActiveTab(city)}>
                <Link className={`locations__item-link tabs__item ${activeTab === city ? 'tabs__item--active' : ''}`}
                  to="#"
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
