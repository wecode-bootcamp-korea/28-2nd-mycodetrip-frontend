import { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

const FlightPriceRange = ({ maxprice, updateMaxPrice, priceRate }) => {
  const [isFilterShown, setisFilterShown] = useState(false);

  const handleReCalculatePrice = e => {
    const { left, width } = e.target.getBoundingClientRect();
    const newPrice = Math.floor((maxprice * (e.pageX - left)) / width);
    updateMaxPrice(newPrice);
  };

  return (
    <Container>
      <Header isFilterShown={isFilterShown}>
        <h2>가격대</h2>
        <IoIosArrowDown
          size={20}
          onClick={() => setisFilterShown(prevShown => !prevShown)}
        />
      </Header>

      <FlightPriceFilter
        maxprice={maxprice * priceRate}
        onClick={handleReCalculatePrice}
        right={priceRate}
      >
        <RangePointer left={priceRate} />
      </FlightPriceFilter>
    </Container>
  );
};

export default FlightPriceRange;

const Container = styled.section`
  position: relative;
  ${({ theme }) => theme.columnFlex};
  gap: 1.25em;
  height: fit-content;
  margin-top: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.color.gray_300};
`;

const Header = styled.header`
  ${({ theme }) => theme.flex};
  justify-content: space-between;
  padding-block: 1em;

  h2 {
    font-size: 1rem;
    font-weight: 500;
  }

  svg {
    cursor: pointer;
    transform: rotate(${({ isFilterShown }) => isFilterShown && '.5turn'});
    transition: all 0.5 ease-in;
  }
`;

const FlightPriceFilter = styled.label`
  ${({ theme }) => theme.flex}
  position: relative;
  width: 100%;
  height: 5px;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.color.primary_400};
  cursor: pointer;

  &::before {
    content: '${({ maxprice }) => `${maxprice?.toLocaleString()}원 미만`}';
    position: absolute;
    top: -1.5rem;
    left: 0;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.4rem;
    background-color: #fff;
    left: ${({ right }) => right * 100}%;
  }
`;

const RangePointer = styled.div`
  position: absolute;
  left: ${({ left }) => left * 100}%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 2px 4px lightgray;
`;
