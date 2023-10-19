import MainPage from '../../pages/main-page';


type ApplicationProps = {
  countOffers: number;
  locationsName: string[];
}

function App({countOffers, locationsName}: ApplicationProps): JSX.Element {
  return (
    <MainPage countOffers={countOffers} locationsName={locationsName}/>
  );
}

export default App;
