import { useState, useEffect } from 'react';
import useQueryString from '../../../hooks/useQueryString';
import { getParsedDate } from '../../../utils/getTime';

import styled from 'styled-components';

import { getKORFormattedDate } from './../../../utils/getTime';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { CgAirplane } from 'react-icons/cg';

import { GET_CHEAP_FLIGHTS_API } from './../../../config/config.js';

const CheapFlights = () => {
  const [cheapFlightJeju, setCheapFlightJeju] = useState([]);
  const [cheapFlightParis, setCheapFlightParis] = useState([]);
  const { navigateWithQS, searchParams } = useQueryString();
  const navigate = cardItem => {
    const usersUpdateQueries = {
      arrival_city: cardItem.arrival_city,
      arrival_date: getParsedDate(cardItem.arrival_time),
      departure_city: cardItem.departure_city,
      departure_date: getParsedDate(cardItem.departure_time),
    };
    Object.entries(usersUpdateQueries).map(([queryKey, queryValue]) =>
      searchParams.set(queryKey, queryValue)
    );
    navigateWithQS('/flightsList');
  };

  useEffect(() => {
    fetch(`${GET_CHEAP_FLIGHTS_API}?city=제주`)
      .then(res => res.json())
      .then(data => setCheapFlightJeju(data.result));
  }, []);

  useEffect(() => {
    fetch(`${GET_CHEAP_FLIGHTS_API}?city=파리`)
      .then(res => res.json())
      .then(data => setCheapFlightParis(data.result));
  }, []);

  const isAllFetched = cheapFlightJeju?.city && cheapFlightParis?.city;
  if (!isAllFetched) return <h1>Not Found</h1>;
  return (
    <>
      {[cheapFlightJeju, cheapFlightParis].map((ticket, idx) => (
        <Container key={idx}>
          <Title>
            {ticket.city === '제주'
              ? `제주도 국내 최저가 항공권 🍊`
              : `파리 해외 최저가 항공권 🥖`}
          </Title>
          <FlightsWrap>
            {ticket.data.map(item => (
              <Ticket key={item.id} onClick={() => navigate(item)}>
                <TicketImg>
                  <img src={item.image} alt="ticketImage" />
                </TicketImg>
                <TicketInfo>
                  <h4>
                    {item.departure_city} <AiOutlineArrowRight />{' '}
                    {item.arrival_city}
                  </h4>
                  <TicketDateInfo>
                    <CgAirplane />
                    {item.departure_city} <AiOutlineArrowRight />{' '}
                    {item.arrival_city}
                    <br />
                    {getKORFormattedDate(item.departure_time)} ~{' '}
                    {getKORFormattedDate(item.arrival_time)}
                  </TicketDateInfo>
                  <em>{item.price.toLocaleString()} ~</em>
                  <b>{getKORFormattedDate(item.departure_time)}</b>
                </TicketInfo>
              </Ticket>
            ))}
          </FlightsWrap>
        </Container>
      ))}
    </>
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
  background: #fff;
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
