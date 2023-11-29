import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import {HelmetProvider} from 'react-helmet-async';
import MainScreen from '../../pages/main-page/main-page';
import LoginScreen from '../../pages/login-page-screen/login-page-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-page-screen';
import OfferScreen from '../../pages/offer-page-screen/offer-page-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainScreen />} />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} >
              <FavoritesScreen />
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoute.Offer}/:id`} element={
            <OfferScreen />
          }
          />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
