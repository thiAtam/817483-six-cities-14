const COUNT_OFFERS: number = 5;
const COMMENTS_LENGTH = 50;
const LOCATIONS_NAME: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const LOCATIONS_OPTION: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

enum APP_ROUTE {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  Root = '/'
}

enum AUTHORIZATION_STATUS {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export {
  COUNT_OFFERS,
  LOCATIONS_NAME,
  LOCATIONS_OPTION,
  APP_ROUTE,
  AUTHORIZATION_STATUS,
  COMMENTS_LENGTH
};

