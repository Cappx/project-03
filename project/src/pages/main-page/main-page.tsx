/* eslint-disable no-console */

import PlaceCardList from '../../components/place-card-list/place-card-list';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import Map from '../../components/map/map';
import { Offers } from '../../types/offers';
import { AuthorizationStatus, MapType } from '../../const';
import { useEffect, useState } from 'react';

type MainPageProps = {
  cardCount: number;
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
  favoritesCount: number;
}

const getCityOffers = (offersList: Offers, currentCity: string) => offersList.filter((offer) => offer.city.name === currentCity);

function MainPage({cardCount, offers, authorizationStatus, favoritesCount}: MainPageProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>('Amsterdam');
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [cityOffers, setCityOffers] = useState<Offers>([]);

  const onPlaceCardHover = (placeCardId: number | null) => {
    placeCardId === null
      ? setSelectedCardId(null)
      : setSelectedCardId(placeCardId);
  };

  const onActiveTab = (city: string) => {
    setActiveTab(city);
  };

  useEffect(() => {
    setCityOffers(getCityOffers(offers, activeTab));
  }, [activeTab, offers]);

  // console.log(activeTab);
  // console.log('---cityOffers', cityOffers);
  // console.log('---selectedCardId', selectedCardId);

  const getTitle = (countCitis: number) => (
    `${countCitis} ${countCitis > 1 ? 'places' : 'place'} to stay in ${activeTab}`
  );

  return (
    <div className="page page--gray page--main">
      <Header authorizationStatus={authorizationStatus} favoritesCount={favoritesCount}/>
      <main className={`page__main page__main--index ${cityOffers.length ? '' : 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs activeTab={activeTab} onActiveTab={onActiveTab}/>
        {cityOffers.length
          ?
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{getTitle(cityOffers.length)}</b>
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
                <PlaceCardList cityOffers={cityOffers} nearby={false} onPlaceCardHover={onPlaceCardHover}/>
              </section>
              <div className="cities__right-section">
                {activeTab === cityOffers[0].city.name && <Map cityOffers={cityOffers} mapType={MapType.Cities} selectedCardId={selectedCardId}/>}
              </div>
            </div>
          </div>
          :
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {activeTab}</p>
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
