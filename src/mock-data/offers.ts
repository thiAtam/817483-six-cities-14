type offerType = {
  bedrooms: number;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

const offer: offerType = {
  'bedrooms': 3,
  'city': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 10
    },
    'name': 'Amsterdam'
  },
  'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'goods': [
    'Heating',
    'Heals',
    'Bros',
    'Dress',
    'Yo',
    'Yoo'
  ],
  'host': {
    'avatarUrl': 'img/avatar-angelina.jpg',
    'id': 3,
    'isPro': true,
    'name': 'Angelina'
  },
  'id': 1,
  'images': ['./img/studio-01.jpg', './img/apartment-01.jpg', './img/apartment-02.jpg', './img/apartment-03.jpg'],
  'isFavorite': true,
  'isPremium': true,
  'location': {
    'latitude': 52.35514938496378,
    'longitude': 4.673877537499948,
    'zoom': 8
  },
  'maxAdults': 4,
  'previewImage': './img/studio-01.jpg',
  'price': 120,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment'
};

export default offer;
