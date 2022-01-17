import { useState } from 'react';
import styled from 'styled-components';
import ReservedFlightTable from '../../components/ReservedFlightTable/ReservedFlightTable';
import useFetch from '../../hooks/useFetch';
import ReservationSummaryCard from './ReservationSummaryCard';
const RESERVED_FLIGHT = '에약한 항공권';
const DETAIL_FLIGHT = '자세히 보기';
const CANCELED_FLIGHT = '취소한 여행';
const VIEWLIST = [RESERVED_FLIGHT, DETAIL_FLIGHT, CANCELED_FLIGHT];

const Mypage = () => {
  const [currView, setCurrView] = useState(0);
  const {
    data: reservedFlightInfo,
    isLoading,
    error,
    fetchData,
  } = useFetch('./data/myPage/reservedUserInfo.json');

  const showDetailFlightTicket = () => {
    setCurrView(1);
    fetchData('./data/myPage/reservedFlight.json');
  };

  const fetchReservedFlight = () => {
    setCurrView(0);
    fetchData('./data/myPage/reservedUserInfo.json');
  };

  const handleSideBarShow = clicked => {
    if (clicked === RESERVED_FLIGHT) fetchReservedFlight();
    else if (clicked === DETAIL_FLIGHT) showDetailFlightTicket();
  };

  const getTotalFlightPrice = () => {
    const fetchedDataType = reservedFlightInfo?.type;
    if (fetchedDataType === 'reservedFlight')
      return reservedFlightInfo?.data
        .reduce((acc, { price }) => acc + price, 0)
        .toLocaleString();
  };
  const totalFlightPrice = getTotalFlightPrice();

  if (isLoading || !reservedFlightInfo.type) return <h1>Loading...</h1>;
  else if (error) return <h2>Error..</h2>;
  return (
    <Container>
      <SidebarMenu>
        <SidebarTitle>내 여행</SidebarTitle>
        <SidebarList>
          {VIEWLIST.map((viewItem, idx) => (
            <SidebarListItem key={idx}>
              <input
                id={viewItem}
                name={viewItem}
                type="checkbox"
                checked={idx === currView}
                onChange={() => handleSideBarShow(viewItem)}
              />
              <SidebarListLabel htmlFor={viewItem}>{viewItem}</SidebarListLabel>
            </SidebarListItem>
          ))}
        </SidebarList>
      </SidebarMenu>
      <Box>
        {reservedFlightInfo.flights?.map(reservedFlight => (
          <ReservationSummaryCard
            key={reservedFlight.id}
            reservedFlight={reservedFlight}
            reservation_number={reservedFlightInfo?.reservation_number}
            showDetailFlightTicket={showDetailFlightTicket}
          />
        ))}
        {reservedFlightInfo.type === 'reservedFlight' && (
          <>
            <ReservedFlightTable
              reservedFlightInfo={reservedFlightInfo?.data}
            />

            <Flex>
              <span>총 상품금액</span>
              <span>{totalFlightPrice}원</span>
            </Flex>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Mypage;

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1em;
  padding: 3rem 10vw;
  min-height: 80vh;
`;

const SidebarMenu = styled.aside`
  min-width: 10rem;
`;

const SidebarTitle = styled.h2`
  margin-bottom: 0.5em;
  letter-spacing: -1px;
`;

const SidebarList = styled.ul`
  border-top: 1px solid ${({ theme }) => theme.color.gray_500};
`;

const SidebarListItem = styled.li`
  position: relative;

  input[type='checkbox'] {
    display: none;

    &:checked ~ label {
      background-color: ${({ theme }) => theme.color.gray_300};

      &::before {
        content: '';
        position: absolute;
        z-index: 1;
        inset: 0;
        right: auto;
        border-left: 3px solid ${({ theme }) => theme.color.primary_400};
      }
    }
  }
`;

const SidebarListLabel = styled.label`
  display: block;
  padding: 1em 2em;
  cursor: pointer;

  input:chekced ~ & {
    background-color: ${({ theme }) => theme.color.gray_300};
  }

  & + & {
    margin-top: 1em;
  }
`;

const Box = styled.section`
  ${({ theme }) => theme.columnFlex};
  justify-content: space-around;
  padding-left: 2em;
  border-left: 1px solid ${({ theme }) => theme.color.gray_500};
`;

const Flex = styled.div`
  ${({ theme }) => theme.flex};
  justify-content: space-between;
  padding: 0 1.5em;
  font-size: 1.25rem;
  font-weight: bold;
`;
