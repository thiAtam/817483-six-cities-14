import MainPage from '../../pages/main-page';


type ApplicationProps = {
  countOffers: number;
}

function App({countOffers}: ApplicationProps): JSX.Element {
  return (
    <MainPage countOffers={countOffers}/>
  );
}

export default App;
