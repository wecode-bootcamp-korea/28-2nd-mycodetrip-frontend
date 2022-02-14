const BASE_QUERY_KEYS = [
  'departure_city=인천',
  'departure_city_code=ICN',
  'adult=1',
  'is_round=YES',
  'imgLoading=YES',
];
export const INIT_QUERY_STRING = BASE_QUERY_KEYS.join('&');

export const LOADING_KEYS = [
  'departure_date',
  'arrival_Date',
  'departure_city',
  'arrival_city',
  'departure_city_code',
  'arrival_city_code',
];

export const OPTIONAL_QUERY_KEYS = [
  'sort',
  'arrival_city',
  'arrival_city_code',
  'departure_date',
  'arrival_date',
  'infant',
  'child',
  'airline_list',
  'at_time',
  'seat_type',
  'maxprice',
  'departure_flight',
  'return_flight',
];
