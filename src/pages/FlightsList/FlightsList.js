import { useEffect } from 'react';
import styled from 'styled-components';
import FlightBadge from '../../components/FlightInfoCard/FlightBadge';
import FlightFilter from './components/FlightFilter';
import FlightPriceRange from './components/FlightPriceRange';
import FlightInfoCard from '../../components/FlightInfoCard/FlightInfoCard';
import FlightsSearchBar from '../../components/FlightsSearchBar/FlightsSearchBar';
import FlightLoading from './components/FlightLoading';
import useFetch from '../../hooks/useFetch';
import useQueryString from '../../hooks/useQueryString';

const FlightsList = () => {
  const {
    searchParams,
    updateParams,
    toggleQueryString,
    navigateWithQS,
    getFilteredParams,
  } = useQueryString();

  const {
    data: flightInfos,
    isLoading: flightLoading,
    error: flightError,
    fetchData: fetchFlight,
  } = useFetch(
    `http://mycodetrip-api.chanjoo.xyz/flights?${searchParams.toString()}`
  );

  const {
    isLoading: airlineLoading,
    data: airlineOption,
    error: airlineError,
  } = useFetch(`http://mycodetrip-api.chanjoo.xyz/flights/airlines`);

  const {
    data: seatOption,
    isLoading: seatLoading,
    error: seatError,
  } = useFetch(`http://mycodetrip-api.chanjoo.xyz/flights/seats`);

  const options = [
    {
      type: airlineOption?.type,
      title: '항공기',
      data: airlineOption?.data,
    },
    {
      type: 'at_time',
      title: '출발시간',
      data: [
        { id: 0, name: '새벽 00:00-06:00', from: 0 },
        { id: 6, name: '아침 06:00~12:00', from: 6 },
        { id: 12, name: '점심 12:00-18:00', from: 12 },
        { id: 18, name: '저녁 18:00-24:00', from: 18 },
      ],
    },
    {
      type: seatOption?.type,
      title: '좌석 종류',
      data: seatOption?.data,
    },
  ];
  // const isErrors = flightError || airlineError || seatError;
  // console.log(flightInfos);

  // 출발,도착 항공권 선택된 경우 ID로 해당 항공권에 대한 정보를 가져온다.
  const getSpecificFlightInfo = selectedFlightID =>
    flightInfos?.data?.find(flight => `${flight.id}` === selectedFlightID);

  const departureFlightID = searchParams.get('departure_flight');
  const departureFlight = getSpecificFlightInfo(departureFlightID);

  const returnFlightID = searchParams.get('return_flight');
  const returnFlight = getSpecificFlightInfo(returnFlightID);
  const isRoundTrip = searchParams.get('is_round');

  const selectedFlights = [departureFlight, returnFlight];

  const isFirstRender = !flightInfos?.data?.length;

  // 현재 항공권 선택시 search에 departure / return으로 ID를 추가
  const selectThisFlight = selectedFlightID => {
    const isLastFlightSelect = isRoundTrip === 'YES' && departureFlightID;
    isLastFlightSelect
      ? updateParams({ return_flight: selectedFlightID })
      : updateParams({ departure_flight: selectedFlightID });
  };

  // 항공권 변경 버튼 클릭시 SearchParams update
  const reselectFlight = selectedFlightID => {
    // eslint-disable-next-line no-const-assign
    const isFlightReselected = departureFlightID === `${selectedFlightID}`;
    isFlightReselected
      ? updateParams({ departure_flight: '', return_flight: '' })
      : updateParams({ return_flight: '' });
  };

  // 가격에 대한 필터 옵션
  const maxpriceValue = searchParams.get('maxprice');
  const priceRate = maxpriceValue ? maxpriceValue / flightInfos?.maxprice : 1;
  const updateMaxPrice = userAdjustedPrice => {
    updateParams({ maxprice: userAdjustedPrice });
  };

  useEffect(() => {
    if (isFirstRender) return;
    checkAllFlightsSelected()
      ? navigateWithQS('/flightsCheck')
      : // : fetchFlight('./data/flights/flightData.json');
        fetchFlight(
          `http://mycodetrip-api.chanjoo.xyz/flights?${searchParams.toString()}`
        );

    // 왕복/편도에 따라 출발, 돌아오는 항공편 모두 선택했는지 여부 반환
    function checkAllFlightsSelected() {
      return isRoundTrip === 'YES' ? returnFlightID : departureFlightID;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const isDataYetFetched = flightLoading || airlineLoading || seatLoading;
  const isImgLoading = searchParams.get('imgLoading') === 'YES';

  const fadeOutImgLoading = () => {
    updateParams({ imgLoading: 'NO' });
  };

  if (isDataYetFetched) return <Loading>Loading...</Loading>;
  else if (flightError || airlineError || seatError)
    return <Error>Error</Error>;
  else
    return (
      <>
        <FlightsSearchBar />
        <Container>
          {isImgLoading && (
            <FlightLoading
              getFilteredParams={getFilteredParams}
              fadeOutImgLoading={fadeOutImgLoading}
            />
          )}
          <SelectedFlightBox>
            {selectedFlights.map(
              (flightInfo, idx) =>
                flightInfo && (
                  <FlightInfoCard
                    key={flightInfo?.id}
                    flightInfo={flightInfo}
                    selected
                    reselectFlight={reselectFlight}
                  >
                    <FlightBadge flightType={idx} flightInfo={flightInfo} />
                  </FlightInfoCard>
                )
            )}
          </SelectedFlightBox>
          <FlightFilterBox>
            {options?.map(option => (
              <FlightFilter
                key={option.title}
                searchParams={searchParams}
                filters={option}
                toggleQueryString={toggleQueryString}
              />
            ))}
            <FlightPriceRange
              maxprice={flightInfos?.maxprice}
              updateMaxPrice={updateMaxPrice}
              priceRate={priceRate}
            />
          </FlightFilterBox>
          <FlightFilterBox>
            <Header>
              <FlexCol>
                <Title>검색결과 총 {flightInfos.total}개</Title>
                <SubTitle>
                  성인 1인 기준 편도 요금입니다.(세금 및 수수료 포함)
                </SubTitle>
              </FlexCol>
              <Select onChange={e => updateParams({ sort: e.target.value })}>
                <option value="가격 낮은순">가격 낮은순</option>
                <option value="가격 높은순">가격 높은순</option>
                <option value="출발 시간 느린 순">출발 시간 늦은 순</option>
                <option value="출발 시간 빠른 순">출발 시간 빠른 순</option>
              </Select>
            </Header>
            {flightInfos?.data?.map(flightInfo => (
              <FlightInfoCard
                key={flightInfo.id}
                flightInfo={flightInfo}
                selectThisFlight={selectThisFlight}
              />
            ))}
          </FlightFilterBox>
        </Container>
      </>
    );
};

export default FlightsList;

const Container = styled.main`
  position: relative;
  display: grid;
  grid-template-columns: 18rem auto;
  grid-template-rows: max-content auto;
  gap: 1.5rem;
  min-height: 150vh;
  padding: 2rem 13vw 1rem;
  background-color: ${({ theme }) => theme.color.gray_100};
  overflow: hidden;
`;

const SelectedFlightBox = styled.section`
  grid-column: span 2;
`;
const FlightFilterBox = styled.section``;

const Header = styled.header`
  ${({ theme }) => theme.flex};
  justify-content: space-between;
  margin-block: 0.75rem 1.5rem;
`;

const FlexCol = styled.div`
  ${({ theme }) => theme.columnFlex}
  gap: .5em;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
`;

const SubTitle = styled.h4`
  color: ${({ theme }) => theme.color.gray_500};
  font-size: 0.8rem;
  font-weight: 400;
`;

const Select = styled.select`
  background: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const Loading = styled.div`
  font-size: 30px;
`;

const Error = styled.div`
  color: red;
`;
