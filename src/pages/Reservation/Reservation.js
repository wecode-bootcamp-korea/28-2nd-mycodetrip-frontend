import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReservAside from './ReservAside';
import ReservedTicketInfo from './ReservedTicketInfo';
import BookerInfo from './BookerInfo';
import PassengerInfos from './PassengerInfos';

const PASSENGER_INFO_FORM = {
  nationality: 'KOR',
  family_name: '',
  given_name: '',
  birthday: '',
  sex: '',
};
const string = window.location.search;
const searchParams = new URLSearchParams(string);
const adult = Number(searchParams.get('adult'));
const departureFlight = searchParams.get('departure_flight');
const returnFlight = searchParams.get('return_flight');

export default function Reservation() {
  const [bookerInfo, setBookerInfo] = useState({
    name: '',
    email: '',
    phonenumber: '',
  });
  const initialPassengerInfo = Array(adult).fill(PASSENGER_INFO_FORM);
  const [passengerInfoList, setPassengerInfoList] =
    useState(initialPassengerInfo);
  const [ticketInfo, setTicketInfo] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch(
      `http://mycodetrip-api.chanjoo.xyz/flights/detail?departure_flight=${departureFlight}&return_flight=${returnFlight}`
    )
      .then(res => res.json())
      .then(result => setTicketInfo(result.result.date));
  }, []);

  useEffect(() => {
    const getTotalPrice = () => {
      const ticketPrice = ticketInfo.map(i => Number(i.price));
      const sumPrice = ticketPrice.reduce((sum, currVal) => sum + currVal);
      return sumPrice;
    };
    if (ticketInfo.length > 0) return setTotalPrice(getTotalPrice());
  }, [ticketInfo]);

  return (
    <Container passengerNumber={initialPassengerInfo.length}>
      <Title>예약하기</Title>
      <ReservedTicketInfo
        ticketInfo={ticketInfo}
        adult={adult}
        totalPrice={totalPrice}
      />
      <ReservAside
        bookerInfo={bookerInfo}
        passengerInfoList={passengerInfoList}
        totalPrice={totalPrice}
        adult={adult}
        departureFlight={departureFlight}
        returnFlight={returnFlight}
      />
      <BookerInfo bookerInfo={bookerInfo} setBookerInfo={setBookerInfo} />
      <PassengerInfos
        passengerInfoList={passengerInfoList}
        setPassengerInfoList={setPassengerInfoList}
      />
    </Container>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-areas:
    'header header'
    'ticket   aside'
    'booker   aside'
    'passenger aside ';
  grid-gap: 30px;
  padding: 30px 80px;
  padding-left: 200px;
  margin-bottom: 450;
`;

const Title = styled.h1`
  grid-area: header;
`;
