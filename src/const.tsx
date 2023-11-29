export const Setting = {
  OffersCount: 5
};

 enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offers'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CityMapData = {
  Amsterdam : {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  Brussels : {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude:4.351697,
      zoom: 13
    }
  },
  Paris : {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  Hamburg : {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  Cologne : {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  Dusseldorf : {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
};

const TILE_LAYER =
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT =
'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const MAX_REVIEWS_COUNT = 10;
const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

export {
  AppRoute,
  AuthorizationStatus,
  MAX_REVIEWS_COUNT,
  MIN_COMMENT_LENGTH,
  MAX_COMMENT_LENGTH,
  TILE_LAYER,
  COPYRIGHT
};
