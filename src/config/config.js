const BASE_URL = 'http://localhost:3000';
const now_URL = 'http://10.58.6.23:8000';

// 사용되는 API 주소
export const GET_SEARCHED_TICKETS_API = `${BASE_URL}/data/main/searchedTickets.json`;

export const GET_CHEAP_FLIGHTS_API = `http://10.58.2.221:8000/flights/main`;

export const GET_SELECT_CITIES_API = `${BASE_URL}/data/flightsSearchBar/flightsSearchBar.json`;

// 항공권 리스트 페이지 API주소
export const GET_ALL_FLIGHTS_INFO_API = `${BASE_URL}/data/flights/flightData.json`;
export const GET_AIRLINE_OPTIONS_API = `${BASE_URL}/data/flights/airlineOption.json`;
export const GET_SEAT_OPTIONS_API = `${BASE_URL}/data/flights/seatOption.json`;

// 항공권

// 예약 및 결제시에 사용되는 유효성 검사 이곳에 작성 해주세요.
export const POST_PERSONALINFORMATION_API = `${now_URL}/orders`;
