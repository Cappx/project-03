import { Link } from 'react-router-dom';
import { CITIES } from '../../const';

type TabsProps = {
  activeCityTab: string;
  onActiveCityTab: (city: string) => void;
}

export default function Tabs({activeCityTab, onActiveCityTab}: TabsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city, idx) => {
            const key = `${idx}-city`;
            return (
              <li key={key} className="locations__item" onClick={() => onActiveCityTab(city)}>
                <Link className={`locations__item-link tabs__item ${activeCityTab === city ? 'tabs__item--active' : ''}`}
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
