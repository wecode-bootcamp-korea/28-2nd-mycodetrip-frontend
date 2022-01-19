import styled from 'styled-components';
import FlightTimeInfo from './FlightTimeInfo';
const FlightInfoCard = ({
  flightInfo,
  selectThisFlight,
  reselectFlight,
  selected,
  children,
}) => {
  const updateQSWithThisFlight = flightID => {
    selected ? reselectFlight(flightID) : selectThisFlight(flightID);
  };

  return (
    <Container selected={selected}>
      {children}
      <FlightLogo>
        <FlightLogoImg src={flightInfo.logo} alt={flightInfo.logo} />
        <FlexCol>
          <h2>{flightInfo.airline}</h2>
          <h3>{flightInfo.aircraft}</h3>
        </FlexCol>
      </FlightLogo>

      <FlightTimeInfo flightInfo={flightInfo} />
      <Typography>{flightInfo.isDiscount ? '할인석' : '일반석'}</Typography>
      <Typography>{flightInfo.tickets}석</Typography>
      <FlightPriceInfo>{flightInfo.price.toLocaleString()}원</FlightPriceInfo>
      {flightInfo.baggage ? (
        `무료 수하물 ${flightInfo.baggage ?? 15}kg`
      ) : (
        <Button
          selected={selected}
          onClick={() => updateQSWithThisFlight(flightInfo.id)}
        >
          {selected ? '항공권 변경' : '선택'}
        </Button>
      )}
    </Container>
  );
};

export default FlightInfoCard;

const Container = styled.section`
  display: grid;
  --grid-column: max-content 2fr 0.5fr 0.5fr max-content max-content;
  --grid-column-withBadge: max-content var(--grid-column);
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

const FlightLogo = styled.section`
  ${({ theme }) => theme.flex};
  justify-content: center;
  gap: 1em;

  h2,
  h3 {
    font-size: 0.825em;
    font-weight: 400;
  }
`;

const FlightLogoImg = styled.img`
  max-width: 2.5rem;
`;

const Typography = styled.span`
  color: ${({ theme, color }) => (color ? theme.color[color] : 'inherit')};
  font-size: 0.875rem;
`;

const Button = styled.button`
  padding: 0.5em 1em;
  opacity: 0.8;
  background-color: ${({ selected, theme }) =>
    selected ? theme.color.gray_500 : theme.color.primary_400};
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ selected, theme }) =>
      selected ? theme.color.gray_600 : theme.color.primary_500};
    opacity: 1;
  }
`;

const FlightPriceInfo = styled.h2`
  font-size: 1em;
`;

const FlexCol = styled.div`
  ${({ theme }) => theme.columnFlex};
  align-items: flex-start;
  gap: 0.25em;
`;
