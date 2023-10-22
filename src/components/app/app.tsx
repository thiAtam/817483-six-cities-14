import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { APP_ROUTE } from '../../const';
import MainPage from '../../pages/main-page';
import FavoritesPage from '../../pages/favorites-screen/favorites-page-screen';
import LoginPage from '../../pages/login-page-screen/login-page-screen';
import OfferPage from '../../pages/offer-page-screen/offer-page-screen';


type ApplicationProps = {
  countOffers: number;
  locationsName: string[];
  locationsOption: string[];
}

function App({countOffers, locationsName, locationsOption}: ApplicationProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTE.Root} element={<MainPage countOffers={countOffers} locationsName={locationsName} locationsOption={locationsOption}/>}/>
        <Route path={APP_ROUTE.Login} element={<LoginPage />} />
        <Route path={APP_ROUTE.Favorites} element={<FavoritesPage />} />
        <Route path={APP_ROUTE.Offer} element={<OfferPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
