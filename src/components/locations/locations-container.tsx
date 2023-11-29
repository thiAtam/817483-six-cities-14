import { CityMapData } from '../../const';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const cities = Object.values(CityMapData);

function Locations(): JSX.Element {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((location) => (
          <li key={location.name} className="locations__item">
            <Link className="locations__item-link tabs__item" to={AppRoute.Main} >
              <span>{location.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Locations;
