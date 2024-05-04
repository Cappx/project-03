export const Setting = {
  CARD_COUNT: 5,
};

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export enum PageType {
  Main = 'cities',
  Property = 'property'
}

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

export const URL_MARKER_DEFAULT = '../img/pin.svg';
export const URL_MARKER_CURRENT = '../img/pin-active.svg';

