import * as Q from './baseKeys';

const BASE_QUERY_KEYS = [
  'departure_city=인천',
  'departure_city_code=ICN',
  'adult=1',
  'is_round=YES',
  'imgLoading=YES',
];
export const INIT_QUERY_STRING = BASE_QUERY_KEYS.join('&');

export const OPTIONAL_QUERY_KEYS = [
  Q.ARRIVAL_CITY,
  Q.ARRIVAL_CITY_CODE,
  Q.ARRIVAL_DATE,
  Q.DEPARTURE_DATE,

  Q.DEPARTURE_FLIGHT,
  Q.RETURN_FLIGHT,
  Q.INFANT,
  Q.CHILD,

  Q.SORT,
  Q.AIRLINES,
  Q.AT_TIME,
  Q.SEAT_TYPE,
  Q.MAXPRICE,
];

export const DEPARTURE = [
  Q.DEPARTURE_DATE,
  Q.DEPARTURE_CITY,
  Q.DEPARTURE_CITY_CODE,
];

export const ARRIVAL = [Q.ARRIVAL_DATE, Q.ARRIVAL_CITY, Q.ARRIVAL_CITY_CODE];
