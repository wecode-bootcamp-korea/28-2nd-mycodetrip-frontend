import styled from 'styled-components';
import FlightInfoCard from '../../FlightInfoCard';
import FlightBadge from '../../FlightInfoCard/FlightBadge';

function SelectedFlights({ searchParams, flightInfos }) {
  const departureID = searchParams.get('departure_flight');
  const arrivalID = searchParams.get('arrival_flight');

  const getDetailFlight = flightID =>
    flightInfos.data?.find(flight => `${flight.id}` === flightID);

  const [departureFlight, arrivalFlight] = [
    getDetailFlight(departureID),
    getDetailFlight(arrivalID),
  ];

  return (
    <Container>
      {/* departure */}
      {departureFlight && (
        <FlightInfoCard flightInfo={departureFlight} selected>
          <FlightBadge flightType={0} flightInfo={departureFlight} />
        </FlightInfoCard>
      )}

      {/* arrival */}
      {arrivalFlight && (
        <FlightInfoCard flightInfo={arrivalFlight} selected>
          <FlightBadge flightType={1} flightInfo={arrivalFlight} />
        </FlightInfoCard>
      )}
    </Container>
  );
}

export default SelectedFlights;

const Container = styled.div`
  grid-column: span 2;
`;
