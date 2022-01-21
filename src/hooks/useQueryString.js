import {
  useNavigate,
  createSearchParams,
  useSearchParams,
} from 'react-router-dom';

const ESSENTIAL_QUERYKEY = [];

const BASE_FLIGHT_QUERY = [
  'departure_date=',
  'arrival_date=',
  'departure_city=인천',
  'arrival_city=',
  'departure_city_code=SEL',
  'arrival_city_code=',
  'adult=1',
  'infant=',
  'child=',
  'at_time=',
  'airline_list=',
  'seat_type=',
  'max_price=',
  'sorting=',
  'is_round=YES',
  'departure_flight=',
  'return_flight=',
  'imgLoading=YES',
];
const INIT_QUERY_STRING = BASE_FLIGHT_QUERY.join('&');

const useQueryString = () => {
  const [searchParams, setSearchParams] = useSearchParams(INIT_QUERY_STRING);
  const navigate = useNavigate();

  function updateOptionQS() {
    // 리스트 페이지에 도착 -> BASE_QUERY들을 담아둔다.
    const nextSearchParams = createSearchParams(searchParams);
    BASE_FLIGHT_QUERY.map(key => nextSearchParams.append(key));
    applyNextQueryString(nextSearchParams);
  }

  function applyNextQueryString(next) {
    setSearchParams(next);
  }

  function checkParamsHasKeyValueSet(queryKey, queryValue) {
    return searchParams.toString().includes(`${queryKey}=${queryValue}`);
  }

  function updateQSByDataSet(
    queryDataList,
    selectedQueryKey,
    selectedQueryValue
  ) {
    const nextSearchParams = createSearchParams(searchParams);
    nextSearchParams.delete(selectedQueryKey);

    for (const item of queryDataList) {
      const isQuerySetExist = item.id !== selectedQueryValue;
      isQuerySetExist && nextSearchParams.append(selectedQueryKey, item.id);
    }
    applyNextQueryString(nextSearchParams);
  }

  function toggleUserSelectedQuery(selectedQueryKey, selectedQueryValue) {
    // entries()는 Iterator 반환하기에 ...사용
    let nextParamsEntries = [...searchParams.entries()];
    const isFilterExist = checkParamsHasKeyValueSet(
      selectedQueryKey,
      selectedQueryValue
    );

    // selectedQueryValue가 QS에 있다면 제거
    if (isFilterExist) {
      nextParamsEntries = nextParamsEntries.filter(([queryKey, queryValue]) => {
        const isTargetValue =
          queryKey === selectedQueryKey && queryValue === selectedQueryValue;
        return isTargetValue ? false : true;
      });
    } else {
      // 없다면 추가
      const selectedQuery = [selectedQueryKey, selectedQueryValue];
      nextParamsEntries.push(selectedQuery);
    }
    const nextSearchParams = createSearchParams(nextParamsEntries);
    applyNextQueryString(nextSearchParams);
  }

  function toggleQueryString(
    queryDataList,
    selectedQueryKey,
    selectedQueryValue
  ) {
    const isFirstCheck = checkParamsHasKeyValueSet(selectedQueryKey, '&');
    isFirstCheck
      ? updateQSByDataSet(queryDataList, selectedQueryKey, selectedQueryValue)
      : toggleUserSelectedQuery(selectedQueryKey, selectedQueryValue);
  }

  function reflectUserSelectQueries(userQueryObject) {
    const nextSearchParams = createSearchParams(searchParams);
    Object.entries(userQueryObject).map(([queryKey, newQueryValue]) =>
      nextSearchParams.set(queryKey, newQueryValue)
    );
    applyNextQueryString(nextSearchParams);
  }

  function navigateToWithQueryString(pathname) {
    navigate(`${pathname}?${searchParams}`);
  }

  function getFilteredParams(userRequestKeys) {
    const entries = [...searchParams.entries()];
    const filteredEntries = entries.filter(([reqQueryKey, _]) =>
      userRequestKeys.includes(reqQueryKey)
    );
    const filteredObj = Object.fromEntries(filteredEntries);
    return filteredObj;
  }

  return {
    searchParams,
    toggleQueryString,
    reflectUserSelectQueries,
    navigateToWithQueryString,
    getFilteredParams,
  };
};

export default useQueryString;
