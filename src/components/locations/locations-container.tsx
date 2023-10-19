type LocationProps = {
  locationsName: string[];
};

function Location({locationsName}: LocationProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {locationsName.map((location) => (
        <li key={location} className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>{location}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Location;
