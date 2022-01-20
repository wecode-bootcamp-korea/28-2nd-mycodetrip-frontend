import { useState, useEffect, useRef } from 'react';

import { getParsedDate } from '../../../utils/getTime';

import styled from 'styled-components';
import { ImLoop } from 'react-icons/im';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const TOTAL_SLIDES = 1;

const SearchedTickets = () => {
  const flightsData = JSON.parse(localStorage.getItem('searchedTicket'));

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextBtn = () => {
    if (currentSlide === 0) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(TOTAL_SLIDES - 1);
    }
  };

  const prevBtn = () => {
    if (currentSlide === 0) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(TOTAL_SLIDES - 1);
    }
  };

  useEffect(() => {
    slideRef.current &&
      (slideRef.current.style.transform = `translateX(-${currentSlide}00%)`);
  }, [currentSlide]);

  // max 6개인 캐러셀, 컨텐츠가 하나 더 추가된다면 배열의 첫번째 요소를 제거

  return flightsData ? (
    <Container>
      <Title>최근 검색한 항공권</Title>
      <CarouselFlightsWrap>
        <CarouselFlights ref={slideRef}>
          {flightsData.map((card, idx) => {
            return (
              <TicketItem key={idx}>
                <FlightContent>
                  <label>{card.is_round}</label>
                  <FlightRoute>
                    <em>
                      {card.departure_city} {card.departure_city_code}
                    </em>
                    <em className="roundTripIcon">
                      <ImLoop />
                    </em>
                    <em>
                      {card.arrival_city} {card.arrival_city_code}
                    </em>
                  </FlightRoute>
                  <FlightInfo>
                    {getParsedDate(card.departure_date)} -{' '}
                    {getParsedDate(card.arrival_date)} · 성인
                    {card.adult}
                  </FlightInfo>
                </FlightContent>
              </TicketItem>
            );
          })}
        </CarouselFlights>
      </CarouselFlightsWrap>
      <Arrows>
        <div className="prevArrow" name="prev" onClick={prevBtn}>
          <FiChevronLeft />
        </div>
        <div className="nextArrow" name="next" onClick={nextBtn}>
          <FiChevronRight />
        </div>
      </Arrows>
    </Container>
  ) : (
    <div />
  );
};

export default SearchedTickets;

const Container = styled.article`
  position: relative;
  width: 1060px;
  margin: 48px auto;
  box-sizing: content-box;
`;

const Title = styled.h3`
  position: relative;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 600;
  color: #343a40;
`;

const CarouselFlightsWrap = styled.div`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  z-index: 1;
`;

const CarouselFlights = styled.ul`
  display: flex;
  width: 1060px;
  height: 100%;
  margin: -20px -20px 0 0;
  transition: all 0.5s ease-in;
`;

const TicketItem = styled.li`
  display: inline-block;
  min-width: 340px;
  height: 100%;
  margin-right: 20px;
  margin-top: 20px;
  background: #fff;

  &:nth-of-type(3n) {
    margin-right: 0;
  }
`;

const FlightContent = styled.div`
  width: 100%;
  display: block;
  padding: 14px 16px;
  box-sizing: border-box;
  text-align: left;
  border-radius: 2px;
  border: 1px solid #dee2e6;

  label {
    display: inline-block;
    min-width: 44px;
    height: 18px;
    padding: 0 3px;
    margin-bottom: 7px;
    line-height: 18px;
    background-color: #fff;
    color: #2b96ed;
    font-size: 11px;
    text-align: center;
    font-weight: 700;
    border-radius: 2px;
    border: 1px solid #2b96ed;
  }
`;

const FlightRoute = styled.span`
  display: block;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  em:not(.roundTripIcon) {
    font-size: 15px;
    font-weight: bold;
  }

  .roundTripIcon {
    vertical-align: text-top;
    margin: 0px 5px;

    svg {
      pointer-events: none;
      color: #acb5bd;
    }
  }
`;

const FlightInfo = styled.p`
  line-height: 14px;
  font-size: 12px;
  color: #848c94;
`;

const Arrows = styled.section`
  .prevArrow,
  .nextArrow {
    position: absolute;
    top: 50%;
    margin-top: -4px;
    width: 50px;
    height: 50px;

    svg {
      color: #acb5bd;
      pointer-events: none;
      width: 100%;
      height: 100%;
    }
  }

  .prevArrow {
    left: -50px;
  }

  .nextArrow {
    right: -50px;
  }
`;
