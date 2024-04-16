export const Setting = {
  CARD_COUNT: 5,
  CITIES: [
    'Paris',
    'Cologne',
    'Brussels',
    'Amsterdam',
    'Hamburg',
    'Dusseldorf'
  ]
};

export enum AppRoute {
  Root = '/',
  Login = 'login',
  Favorites = 'favorites',
  Property = 'offer',
  PropertyId = ':id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UNKNOWN'
}
