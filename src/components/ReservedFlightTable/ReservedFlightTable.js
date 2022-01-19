import styled from 'styled-components';
import FlightBadge from '../FlightInfoCard/FlightBadge';
import FlightTimeInfo from '../FlightInfoCard/FlightTimeInfo';
import { getKORFormattedDate } from '../../utils/getTime';

const ReservedFlightTable = ({ reservedFlightInfo }) => {
  return (
    <Container>
      {reservedFlightInfo?.map((flightInfo, idx) => (
        <div key={idx}>
          <FlightBadge flightInfo={flightInfo} flightType={idx} size="lg">
            <p>{getKORFormattedDate(flightInfo.departure.time)}</p>
          </FlightBadge>
          <ResveredFlight>
            <img src={flightInfo.logo} alt="airline logo" />
            <FlexCol>
              <p>{flightInfo.airline}</p>
              <p>{flightInfo.aircraft}</p>
            </FlexCol>
            <FlightTimeInfo flightInfo={flightInfo} />
            <FlexCol>
              <p>성인 {flightInfo?.personnel}명</p>
              <p>{flightInfo.seat_type}</p>
            </FlexCol>
            <Typograpy>무료 수하물 {flightInfo?.baggage ?? 15}KG</Typograpy>
          </ResveredFlight>
        </div>
      ))}
    </Container>
  );
};

export default ReservedFlightTable;

const Container = styled.section``;

const ResveredFlight = styled.div`
  ${({ theme }) => theme.flex}
  justify-content: space-around;
  padding: 0.5em;
  border-block: 1px solid ${({ theme }) => theme.color.gray_500};

  img {
    max-width: 4rem;
  }
`;

const FlexCol = styled.div`
  display: ${({ theme }) => theme.columnFlex};
  font-size: 0.875rem;
`;

const Typograpy = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.gray_500};
`;
