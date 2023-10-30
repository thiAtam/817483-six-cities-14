import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { APP_ROUTE, AUTHORIZATION_STATUS } from '../../const';
import MainPage from '../../pages/main-page';
import FavoritesPage from '../../pages/favorites-screen/favorites-page-screen';
import LoginPage from '../../pages/login-page-screen/login-page-screen';
import OfferPage from '../../pages/offer-page-screen/offer-page-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import offer from '../../mock-data/offers';
import user from '../../mock-data/user';


type ApplicationProps = {
  countOffers: number;
  locationsName: string[];
  locationsOption: string[];
}

function App({countOffers, locationsName, locationsOption}: ApplicationProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={APP_ROUTE.Root} element={<MainPage countOffers={countOffers} locationsName={locationsName} locationsOption={locationsOption} previewImage={offer.previewImage}/>}/>
          <Route path={APP_ROUTE.Login} element={<LoginPage email={user.email}/>} />
          <Route path={APP_ROUTE.Favorites} element={<PrivateRoute authorizationStatus={AUTHORIZATION_STATUS.NoAuth}><FavoritesPage /></PrivateRoute>}/>
          <Route path={`${APP_ROUTE.Offer}/:id`} element={<OfferPage previewImage={offer.previewImage} images={offer.images} price={offer.price} rating={offer.rating} type={offer.type} isPremium={offer.isPremium} title={offer.title} bedrooms={offer.bedrooms} maxAdults={offer.maxAdults} goods={offer.goods} host={offer.host}/>} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
