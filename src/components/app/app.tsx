import MainPage from '../../pages/main-page';


type ApplicationProps = {
  countOffers: number;
  locationsName: string[];
  locationsOption: string[];
}

function App({countOffers, locationsName, locationsOption}: ApplicationProps): JSX.Element {
  return (
    <MainPage countOffers={countOffers} locationsName={locationsName} locationsOption={locationsOption}/>
  );
}

export default App;
