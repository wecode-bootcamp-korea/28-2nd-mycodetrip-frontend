import { useState, useEffect } from 'react';

import styled from 'styled-components';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { CgAirplane } from 'react-icons/cg';

import { GET_CHEAPFLIGHTS_API } from './../../../config/config.js';

const CheapFlights = () => {
  const [ticketData, setTicketData] = useState([]);

  useEffect(() => {
    fetch(`${GET_CHEAPFLIGHTS_API}`)
      .then(res => res.json())
      .then(data => setTicketData(data));
  }, []);

  return (
    <Container>
      <Title>제주도 국내 최저가 항공권 🍊</Title>
      <FlightsWrap>
        {ticketData.map(item => (
          <Ticket key={item.id}>
            <TicketImg>
              <img src={item.ticketImg} alt="" />
            </TicketImg>
            <TicketInfo>
              <h4>
                {item.departure} <AiOutlineArrowRight /> {item.arrival}
              </h4>
              <TicketDateInfo>
                <CgAirplane />
                {item.departure} <AiOutlineArrowRight /> {item.arrival}
                <br />
                {item.date_departure} ~ {item.date_arrival}
              </TicketDateInfo>
              <em>24500원 ~</em>
              <b>{item.departure_date}월 출발</b>
            </TicketInfo>
          </Ticket>
        ))}
      </FlightsWrap>
    </Container>
  );
};

export default CheapFlights;

const Container = styled.article`
  position: relative;
  width: 1060px;
  margin: 48px auto;
`;

const Title = styled.h3`
  margin-bottom: 16px;
  color: #343a40;
  font-size: 24px;
  font-weight: 600;
`;

const FlightsWrap = styled.ul`
  display: flex;
  margin: -20px -20px 0 0;
`;

const Ticket = styled.li`
  width: 250px;
  margin: 20px 20px 0 0;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px rgb(132 140 148 / 30%);
`;

const TicketImg = styled.figure`
  height: 140px;
  overflow: hidden;
  border-radius: 2px 2px 0 0;
  background-color: #dee2e6;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TicketInfo = styled.div`
  padding: 16px;

  svg {
    // 아이콘
    vertical-align: text-top;
  }

  h4 {
    height: 24px;
    font-size: 15px;
    font-weight: 600;
    line-height: 14px;
  }

  em {
    display: inline-block;
    width: 70%;
    margin-top: 12px;
    color: #343a40;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
  }

  b {
    display: inline-block;
    width: 30%;
    margin-top: 14px;
    text-align: right;
    font-weight: normal;
    font-size: 12px;
    color: #025ba5;
  }
`;

const TicketDateInfo = styled.p`
  font-size: 12px;
  color: #848c94;
  line-height: 16px;
`;
