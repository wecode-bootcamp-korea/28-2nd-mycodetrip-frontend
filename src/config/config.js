const BASE_URL = 'http://mycodetrip-api.chanjoo.xyz';
// const BASE_URL = 'http://54e7-211-106-114-186.ngrok.io';
// const now_URL = 'http://10.58.6.23:8000';

// 사용되는 API 주소

export const GET_CHEAP_FLIGHTS_API = `${BASE_URL}/flights/main`;

export const GET_SELECT_CITIES_API = `${BASE_URL}/flights/cities`;

// 항공권 리스트 페이지 API주소
export const GET_ALL_FLIGHTS_INFO_API = `${BASE_URL}/data/flights/flightData.json`;
export const GET_AIRLINE_OPTIONS_API = `${BASE_URL}/data/flights/airlineOption.json`;
export const GET_SEAT_OPTIONS_API = `${BASE_URL}/data/flights/seatOption.json`;

// 항공권

// 예약 및 결제시에 사용되는 유효성 검사 이곳에 작성 해주세요.
export const POST_PERSONALINFORMATION_API = `${BASE_URL}/orders`;
