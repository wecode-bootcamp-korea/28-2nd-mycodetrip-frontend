import React, { useState, useEffect } from 'react';
// import useQueryString from '../../../hooks/useQueryString';
import useFetch from '../../hooks/useFetch';
import styled from 'styled-components';
import FlightInfoCard from '../../components/FlightInfoCard/FlightInfoCard';
import Button from './components/Button';

export default function ReservedTicketInfo() {
  const [hiddenDisplayPrice, setHiddenDisplayPrice] = useState(true);
  const { data, isLoading, error } = useFetch(
    './data/flights/flightDetail.json'
  );
  // const {
  //   searchParams,
  //   toggleQueryString,
  //   reflectUserSelectQueries,
  //   navigateToWithQueryString,
  // } = useQueryString();

  //돈구하기
  // useEffect(() => {
  //   const getTotalPrice = () => {
  //     const getObj = { ...data.price };
  //     console.log(getObj);
  //   };
  //   getTotalPrice();
  // }, []);

  const handleDisplayPrice = e => {
    if (hiddenDisplayPrice === false) {
      setHiddenDisplayPrice(true);
    } else {
      setHiddenDisplayPrice(false);
    }
  };

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>Sorry! </h1>;
  return (
    <ReservedTicketInfoWrapper>
      <P>선택한 항공권</P>
      {data.map((x, index) => (
        <FlightInfoCard key={index} flightInfo={x} />
      ))}
      <div hidden={hiddenDisplayPrice}>
        <P fontsize="16px">성인$명</P>
        <FatHr />
        <Row>
          <span>항공요금</span>
          <span>n*price 원</span>
        </Row>
        <Row>
          <span>유류할증료</span>
          <span>x원</span>
        </Row>
        <FatHr />
        <Row fontsize="16px">
          <span>성인 총 요금</span>
          <span>n*price + x 원</span>
        </Row>
      </div>
      <FatHr />
      <Row>
        <span>총 상품 금액</span>
        <span>n*price + x 원</span>
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
