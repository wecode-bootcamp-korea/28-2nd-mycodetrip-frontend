import { useEffect } from 'react';
import styled from 'styled-components';
import FlightBadge from '../../components/FlightInfoCard/FlightBadge';
import FlightInfoCard from '../../components/FlightInfoCard/FlightInfoCard';
import useFetch from '../../hooks/useFetch';
import useQueryString from '../../hooks/useQueryString';

const PASSENGER_TYPE = ['adult', 'infant', 'baby'];

const FlightsCheck = () => {
  const { searchParams, reflectUserSelectQueries, navigateToWithQueryString } =
    useQueryString();

  const {
    data: detailFlightsInfo,
    isLoading: detailFlightsLoading,
    error: detailFlightsError,
    // } = useFetch('./data/flights/flightDetail.json');
  } = useFetch(
    `http://mycodetrip-api.chanjoo.xyz/flights/detail?${searchParams.toString()}`
  );

  const isFirstRender = !detailFlightsInfo?.length;
  const departureFlightID = searchParams.get('departure_flight');

  const filterPersonnalPrice = detailFlightsInfo?.data?.reduce(
    (acc, flight) => acc + parseInt(flight.price),
    0
  );

  const selectedFlightsDataSet = PASSENGER_TYPE.reduce((acc, queryKey) => {
    const personnel = searchParams.get(queryKey);
    const obj = {
      type: queryKey.toUpperCase(),
      price: filterPersonnalPrice,
      personnel,
      totalPrice: filterPersonnalPrice * personnel,
    };
    if (personnel) acc.push(obj);
    return acc;
  }, []);

  const totalFlightPrice = selectedFlightsDataSet
    .reduce((acc, { price }) => (acc += price), 0)
    .toLocaleString();

  const reselectFlight = selectedFlightID => {
    // eslint-disable-next-line no-const-assign
    const isFlightReselected = departureFlightID === `${selectedFlightID}`;
    isFlightReselected
      ? reflectUserSelectQueries({ departure_flight: '', return_flight: '' })
      : reflectUserSelectQueries({ return_flight: '' });
  };

  const goToReservation = () => {
    navigateToWithQueryString('/reservation');
  };

  useEffect(() => {
    if (!isFirstRender) navigateToWithQueryString('/flightsList');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  if (detailFlightsError) return <h2>Error ${detailFlightsError}</h2>;
  else if (detailFlightsLoading) return <h1>Loading...</h1>;
  return (
    <Container>
      {detailFlightsInfo?.data?.map(
        (flightInfo, idx) =>
          flightInfo?.id && (
            <FlightInfoCard
              key={flightInfo.id}
              flightInfo={flightInfo}
              reselectFlight={reselectFlight}
              selected
            >
              <FlightBadge flightType={idx} flightInfo={flightInfo} />
            </FlightInfoCard>
          )
      )}

      <DetailFeeTable>
        <caption>상세요금</caption>
        <thead>
          <TableRow>
            <th>항목</th>
            <th>요금</th>
            <th>인원</th>
            <th>총요금</th>
          </TableRow>
        </thead>
        <tbody>
          {selectedFlightsDataSet?.map(
            ({ type, price, personnel, totalPrice }) => (
              <TableRow key={type}>
                <td>{type}</td>
                <td>{`${price?.toLocaleString()}원`}</td>
                <td>{personnel}</td>
                <td>{`${totalPrice.toLocaleString()}원`}</td>
              </TableRow>
            )
          )}
          <TableRow>
            <td>총 예상요금</td>
            <td />
            <td>{totalFlightPrice}원</td>
            <td>
              <Button onClick={goToReservation}>예약하기</Button>
            </td>
          </TableRow>
        </tbody>
      </DetailFeeTable>
    </Container>
  );
};

export default FlightsCheck;

const Container = styled.section`
  background-color: ${({ theme }) => theme.color.gray_50};
  padding: 7em 13vw;
`;

const DetailFeeTable = styled.table`
  width: 100%;
  margin-bottom: 5rem;
  padding: 1em 2em;
  background-color: ${({ theme }) => theme.color.white};

  caption {
    width: 100%;
    margin-top: 3rem;
    padding-block: 1em;
    padding-left: 3rem;
    background-color: ${({ theme }) => theme.color.white};
    text-align: left;
    font-weight: bold;
  }
`;

const TableRow = styled.tr`
  text-align: center;
  border-block: 1px solid ${({ theme }) => theme.color.gray_300};

  th {
    padding-block: 1em;
  }

  td {
    width: 25%;
    padding-block: 1em;
  }

  &:last-child {
    font-weight: bold;
  }
`;

const Button = styled.button`
  padding: 1em 2em;
  border: none;
  background-color: ${({ theme }) => theme.color.primary_400};
  color: ${({ theme }) => theme.color.white};
  font-weight: bold;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
