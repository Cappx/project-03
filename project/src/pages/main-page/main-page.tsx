import PlaceCardList from '../../components/place-card-list/place-card-list';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import { Offers } from '../../types/offers';
import { AuthorizationStatus } from '../../const';

type MainPageProps = {
  cardCount: number;
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
  favoritesCount: number;
}

function MainPage({cardCount, offers, authorizationStatus, favoritesCount}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header authorizationStatus={authorizationStatus} favoritesCount={favoritesCount}/>
      <main className={`page__main page__main--index ${offers.length ? '' : 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        {offers.length
          ?
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                      Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <PlaceCardList offers={offers} nearby={false}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"></section>
              </div>
            </div>
          </div>
          :
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          </div>}
      </main>
    </div>
  );
}

export default MainPage;
