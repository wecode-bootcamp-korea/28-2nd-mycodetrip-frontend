import RouteSearch from './RouteSearch/RouteSearch';
import Passengers from './Passengers/Passengers';

import styled from 'styled-components';

const FlightsSearchBar = () => {
  return (
    <Container>
      <SearchBarWrap>
        <RouteSearch />
        <Passengers />
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
