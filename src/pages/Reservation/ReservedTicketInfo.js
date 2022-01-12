import React, { useState } from 'react';
import styled from 'styled-components';
import ReservedFlightTable from '../../components/ReservedFlightTable/ReservedFlightTable.js';
import Button from './components/Button';

export default function ReservedTicketInfo({ ticketInfo, totalPrice, adult }) {
  const [hiddenDisplayPrice, setHiddenDisplayPrice] = useState(true);

  const handleDisplayPrice = e => {
    if (hiddenDisplayPrice === false) {
      setHiddenDisplayPrice(true);
    } else {
      setHiddenDisplayPrice(false);
    }
  };

  return (
    <ReservedTicketInfoWrapper>
      <P>선택한 항공권</P>
      <ReservedFlightTable reservedFlightInfo={ticketInfo} adult={adult} />
      <div hidden={hiddenDisplayPrice}>
        <P fontsize="16px">성인{adult}명</P>
        <FatHr />
        <Row>
          <span>항공요금</span>
          <span>{totalPrice} 원</span>
        </Row>
        <Row>
          <span>유류할증료</span>
          <span>0원</span>
        </Row>
        <FatHr />
        <Row fontsize="16px">
          <span>성인 총 요금</span>
          <span>
            {totalPrice} x {adult} = {totalPrice * adult} 원
          </span>
        </Row>
      </div>
      <FatHr />
      <Row>
        <span>총 상품 금액</span>
        <span>{totalPrice * adult} 원</span>
      </Row>
      <ButtonWrapper>
        <Button
          type="button"
          value={hiddenDisplayPrice ? '요금정보 자세히 보기' : '요금정보 접기'}
          onClick={handleDisplayPrice}
        />
      </ButtonWrapper>
    </ReservedTicketInfoWrapper>
  );
}

const ReservedTicketInfoWrapper = styled.div`
  grid-area: ticket;
  display: flex;
  flex-flow: column;
`;

const P = styled.p`
  font-size: ${props => (props.fontsize ? props.fontsize : '20px')};
  margin-bottom: 20px;
`;

const FatHr = styled.hr`
  margin: 5px 0px;
`;

const Row = styled.div`
  display: flex;
  justify-content: ${props =>
    props.justifycontent ? props.justifycontent : 'space-between'};
  padding: 5px 10px;
  font-size: ${props => (props.fontsize ? props.fontsize : '14px')};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;
