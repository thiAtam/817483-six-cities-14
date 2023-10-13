import MainPage from '../../pages/main-page';


type applicationProps = {
  countOffers: number;
}

function App({countOffers}: applicationProps): JSX.Element {
  return (
    <MainPage countOffers={countOffers}/>
  );
}

export default App;
