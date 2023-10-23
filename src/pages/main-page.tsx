import OfferCard from '../components/offer-card/offer-card';
import Header from '../components/header/header';
import Location from '../components/locations/locations-container';
import offers from '../mock-data/offers';
import { Helmet } from 'react-helmet-async';

type LocationCities = string[]

type MainPageProps = {
  countOffers: number;
  locationsName: LocationCities;
  locationsOption: string[];
}

function MainPage({countOffers, locationsName, locationsOption}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Choose Your place!</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Location locationsName={locationsName}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{countOffers} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={Number('0')}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  {locationsOption.map((option) => (
                    <li key={option}
                      className="places__option places__option--active"
                      tabIndex={Number('0')}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {Array.from({length: countOffers}, (_: string, count: number) =>
                  (<OfferCard key={count} price={offers.price} images={offers.images} rating={offers.rating} isPremium={offers.isPremium} title={offers.title} type={offers.type}/>
                  ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
