import React, { useState } from 'react';
import styled from 'styled-components';
import ReservAside from './ReservAside';
import ReservedTicketInfo from './ReservedTicketInfo';
import BookerInfo from './BookerInfo';
import PassengerInfos from './PassengerInfos';

const PASSENGER_INFO_FORM = {
  nationality: '',
  family_name: '',
  given_name: '',
  birthday: '',
  sex: '',
};
const adult = 3; //change

export default function Reservation() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [bookerInfo, setBookerInfo] = useState({
    name: '',
    email: '',
    phonenumber: '',
  });
  const initialPassengerInfo = Array(adult).fill(PASSENGER_INFO_FORM);
  const [passengerInfoList, setPassengerInfoList] =
    useState(initialPassengerInfo);

  const [passengerInfo, setPassengerInfo] = useState(initialPassengerInfo);

  //요것은 adult 정보를 get 했을 때 다시 반응하도록
  const howLongPassengerList = () => {
    setPassengerInfoList(Array(adult).fill(PASSENGER_INFO_FORM));
  };

  return (
    <Container passengerNumber={initialPassengerInfo.length}>
      <Title>예약하기</Title>
      <ReservedTicketInfo
        adult={adult}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
      <ReservAside
        bookerInfo={bookerInfo}
        passengerInfo={passengerInfo}
        passengerInfoList={passengerInfoList}
      />
      <BookerInfo bookerInfo={bookerInfo} setBookerInfo={setBookerInfo} />
      <PassengerInfos
        passengerInfoList={passengerInfoList}
        passengerInfo={passengerInfo}
        setPassengerInfo={setPassengerInfo}
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
