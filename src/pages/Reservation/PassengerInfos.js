import React from 'react';
import styled from 'styled-components';
import PassengerInfo from './PassengerInfo';

export default function PassengerInfos({
  passengerInfoList,
  setPassengerInfoList,
}) {
  return (
    <Container>
      <P>탑승객 정보 (필수)</P>
      <hr />
      {passengerInfoList.map((items, index) => {
        return (
          <PassengerInfo
            key={index}
            index={index}
            passengerInfo={items}
            passengerInfoList={passengerInfoList}
            setPassengerInfoList={setPassengerInfoList}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  grid-area: passenger;
  display: flex;
  flex-flow: column;
  padding: 0px 20px 30px 20px;
`;
const P = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;
