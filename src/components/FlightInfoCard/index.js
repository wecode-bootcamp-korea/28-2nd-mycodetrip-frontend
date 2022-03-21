import styled from 'styled-components';

// Components
import FlightTimeInfo from './FlightTimeInfo';
import { Typography, CardButton } from '../_atom';
import { FlightLogo } from '../_molecules';

// Hooks && Utils
import useQueryString from '../../hooks/useQueryString';
import { getLocalePrice } from '../../utils/getLocalePrice';
import { selectedFlightQuery } from '../../constant/flightInfoCard';

const FlightInfoCard = ({ flightInfo, selected, children }) => {
  const { updateParams, getFilteredParams, deleteOption } = useQueryString();
  const { departure_flight, arrival_flight, is_round } =
    getFilteredParams(selectedFlightQuery);

  function selectFlight(flightID) {
    selected ? cancelFlight(flightID) : reserveFlight(flightID);

    // 선택 클릭
    function reserveFlight(flightID) {
      const nextFlightEntry = {};
      const isDepFlightExist = departure_flight !== undefined;
      const isArrFlightExist =
        is_round === 'YES' && arrival_flight !== undefined;

      if (isArrFlightExist) return;
      else if (isDepFlightExist) nextFlightEntry.arrival_flight = flightID;
      else nextFlightEntry.departure_flight = flightID;

      updateParams(nextFlightEntry);
    }

    // 항공권 변경 클릭
    function cancelFlight(flightID) {
      // 출발편 클릭시 2개 모두 제거  || 아니면 arrival(돌아오는 편만 제거)
      const isDepSelected = departure_flight === `${flightID}`;
      if (isDepSelected) deleteOption(['departure_flight', 'arrival_flight']);
      else deleteOption(['arrival_flight']);
    }
  }

  return (
    <Container selected={selected}>
      {/* Possible badge component for children */}
      {children}
      <FlightLogo
        flightImg={`http://mycodetrip-api.chanjoo.xyz${flightInfo.logo}`}
        airline={flightInfo.airline}
        aircraft={flightInfo.aircraft}
      />
      <FlightTimeInfo flightInfo={flightInfo} />
      <Typography>일반석</Typography>
      <Typography>{flightInfo.seat_type}석</Typography>
      <Typography bold>{getLocalePrice(flightInfo.price)}</Typography>
      <CardButton
        selected={selected}
        onClick={() => selectFlight(flightInfo.id)}
      >
        {selected ? '항공권 변경' : '선택'}
      </CardButton>
    </Container>
  );
};

export default FlightInfoCard;

const Container = styled.section`
  --grid-column: max-content 2fr 0.5fr 0.5fr max-content max-content;
  --grid-column-withBadge: max-content var(--grid-column);

  display: grid;
  grid-template-columns: var(
    ${({ selected }) =>
      selected ? `--grid-column-withBadge` : `--grid-column`}
  );
  place-items: center;
  gap: 1em;

  min-width: 45rem;
  padding: 0.675em 1.25em;

  background-color: ${({ theme }) => theme.color.white};
  font-size: 1.125rem;

  & + & {
    margin-top: 0.5em;
  }
`;
