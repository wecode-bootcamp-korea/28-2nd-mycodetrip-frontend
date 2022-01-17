import RouteSearch from './RouteSearch/RouteSearch';
import Passengers from './Passengers/Passengers';

import styled from 'styled-components';
import DatePick from './DatePick/DatePick';

const FlightsSearchBar = () => {
  return (
    <Container>
      <SearchBarWrap>
        <RouteSearch />
        <DatePick />
        <Passengers />
        <SearchBtn>검색</SearchBtn>
      </SearchBarWrap>
    </Container>
  );
};

export default FlightsSearchBar;

const Container = styled.article`
  padding: 165px 0 56px;
  background: url(https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
    no-repeat center;
  background-size: cover;
`;

const SearchBarWrap = styled.section`
  display: flex;
  width: 1064px;
  margin: 0 auto;
`;

const SearchBtn = styled.button`
  display: block;
  width: 70px;
  min-width: 70px;
  height: 48px;
  margin-left: 4px;
  line-height: 48px;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  background-color: #51abf3;
  border-radius: 2px;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%);
  text-align: center;
  transition: background-color ease-in-out 0.25s, box-shadow ease-in-out 0.25s;
`;
