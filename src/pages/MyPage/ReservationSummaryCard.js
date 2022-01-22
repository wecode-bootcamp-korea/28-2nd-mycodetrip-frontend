import styled, { css } from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';
import { getKORFormattedDate } from '../../utils/getTime';

const ReservationSummaryCard = ({ reservedFlight, showDetailFlightTicket }) => {
  return (
    <Container>
      <Typography align="left">
        {getKORFormattedDate(reservedFlight.flights[0].travel_date, true)}
      </Typography>
      <Box>
        <img
          src={`http://mycodetrip-api.chanjoo.xyz${reservedFlight.flights[0].logo}`}
          alt="flight logos"
        />
        <Typography color="primary" pointer onClick={showDetailFlightTicket}>
          예약 상세 보기 <IoIosArrowForward />
        </Typography>
        <Flex>
          <SubTitle>[{reservedFlight.flights[0].airline}]</SubTitle>
          <p>
            {reservedFlight.flights[0].departure}-
            {reservedFlight.flights[0].arrival}
          </p>
        </Flex>
        <Typography>예약번호 {reservedFlight.reservation_number}</Typography>
      </Box>
    </Container>
  );
};

export default ReservationSummaryCard;

const Container = styled.section`
  text-align: left;

  & + & {
    margin-top: 1rem;
  }
`;

const Box = styled.section`
  display: grid;
  grid-template-columns: 100px auto;
  gap: 0 1em;
  padding: 2em 2.5em;
  border-radius: 2rem;
  box-shadow: 0 0 2px 2px ${({ theme }) => theme.color.gray_300};
  text-align: left;

  img {
    grid-row: span 3;
  }
`;

const SubTitle = styled.h3`
  margin-right: 1em;
`;

const TopRightPointer = css`
  text-align: right;
  cursor: pointer;
`;

const Typography = styled.p`
  margin-bottom: 1rem;
  font-weight: bold;
  color: ${({ color, theme }) =>
    color === 'primary' ? theme.color.primary_400 : theme.color.gray_500};
  ${({ pointer }) => pointer && TopRightPointer}
`;

const Flex = styled.div`
  ${({ theme }) => theme.flex}
`;
