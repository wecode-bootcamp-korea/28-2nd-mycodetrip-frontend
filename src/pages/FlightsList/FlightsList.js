import { useEffect } from 'react';
import styled from 'styled-components';

// components
import { FlightPriceRange, FlightHeader } from '../../components/_molecules';
import { SelectedFlights } from '../../components/_organism';

import FlightLoading from '../../components/FlightLoading';
import FlightFilter from '../../components/FlightFilter';
import FlightInfoCard from '../../components/FlightInfoCard';

import FlightsSearchBar from '../../components/FlightsSearchBar/FlightsSearchBar';

// hooks
import useFetch from '../../hooks/useFetch';
import useQueryString from '../../hooks/useQueryString';

// constant
import {
  GET_ALL_FLIGHTS_INFO_API,
  GET_AIRLINE_OPTIONS_API,
  GET_SEAT_OPTIONS_API,
} from '../../config/config';
import * as Q from '../../constant/baseKeys';

const FlightsList = () => {
  const { searchParams, updateParams, navigateWithQS, getFilteredParams } =
    useQueryString();

  const {
    data: flightInfos,
    isLoading: flightLoading,
    error: flightError,
    fetchData: fetchFlight,
  } = useFetch(`${GET_ALL_FLIGHTS_INFO_API}?${searchParams.toString()}`);

  const {
    isLoading: airlineLoading,
    data: airlineOption,
    error: airlineError,
  } = useFetch(GET_AIRLINE_OPTIONS_API);

  const {
    data: seatOption,
    isLoading: seatLoading,
    error: seatError,
  } = useFetch(GET_SEAT_OPTIONS_API);

  const isFirstRender = !flightInfos?.data?.length;
  const isDataYetFetched = flightLoading || airlineLoading || seatLoading;
  const isImgLoading = searchParams.get(Q.IMG_LOADING) === 'YES';

  useEffect(() => {
    if (isFirstRender) return;
    checkAllFlightsSelected()
      ? navigateWithQS('/flightsCheck')
      : fetchFlight(
          `http://mycodetrip-api.chanjoo.xyz/flights?${searchParams.toString()}`
        );

    // 왕복/편도에 따라 출발, 돌아오는 항공편 모두 선택했는지 여부 반환
    function checkAllFlightsSelected() {
      const isRoundTrip = searchParams.get(Q.ISROUND);
      return isRoundTrip === 'YES'
        ? searchParams.has(Q.RETURN_FLIGHT)
        : searchParams.has(Q.DEPARTURE_FLIGHT);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

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
              updateParams={updateParams}
            />
          )}
          <SelectedFlights
            searchParams={searchParams}
            flightInfos={flightInfos}
          />
          <FlightFilterBox>
            <FlightFilter
              airlineOption={airlineOption}
              seatOption={seatOption}
            />
            <FlightPriceRange
              maxprice={flightInfos?.maxprice}
              updateParams={updateParams}
              searchParams={searchParams}
            />
          </FlightFilterBox>
          <FlightFilterBox>
            <FlightHeader count={flightInfos?.total} />
            {flightInfos?.data?.map(flightInfo => (
              <FlightInfoCard key={flightInfo.id} flightInfo={flightInfo} />
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

const FlightFilterBox = styled.section``;

const Loading = styled.div`
  font-size: 30px;
`;

const Error = styled.div`
  color: red;
`;
