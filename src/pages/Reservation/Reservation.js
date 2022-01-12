import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import useQueryString from '../../hooks/useQueryString.js';
import useFetch from '../../hooks/useFetch';
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

export default function Reservation() {
  const [adult, setAdult] = useState(0);
  const [departureFlight, setDepartureFlight] = useState({});
  const [returnFlight, setReturnFlight] = useState({});
  const [bookerInfo, setBookerInfo] = useState({
    name: '',
    email: '',
    phonenumber: '',
  });
  const initialPassengerInfo = Array(adult).fill(PASSENGER_INFO_FORM);
  const [passengerInfoList, setPassengerInfoList] =
    useState(initialPassengerInfo);
  console.log(passengerInfoList);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const string = window.location.search;
    const searchParams = new URLSearchParams(string);
    setAdult(Number(searchParams.get('adult')));
    setDepartureFlight(searchParams.get('departure_flight'));
    setReturnFlight(searchParams.get('return_flight'));
  }, [adult]);

  return (
    <Container passengerNumber={initialPassengerInfo.length}>
      <Title>예약하기</Title>
      <ReservedTicketInfo
        // data={data}
        adult={adult}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
      <ReservAside
        bookerInfo={bookerInfo}
        passengerInfoList={passengerInfoList}
        totalPrice={totalPrice}
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
    '   .   .    '
    'header header'
    'ticket   aside'
    'booker   aside'
    'passenger aside'
    '   .   .   ';
  grid-gap: 30px;
  padding: 30px 80px;
`;

const Title = styled.h1`
  grid-area: header;
`;
