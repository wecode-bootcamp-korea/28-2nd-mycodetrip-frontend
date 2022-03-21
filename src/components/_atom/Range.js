import styled from 'styled-components';
import { getLocalePrice } from '../../utils/getLocalePrice';

export const Range = ({ currPrice, maxprice, updatePrice }) => {
  return (
    <>
      <RangeStyle
        id="range"
        type="range"
        min="0"
        max={`${maxprice}`}
        step="500"
        value={currPrice}
        onChange={updatePrice}
      />
      <CurrPriceLabel htmlFor="range">
        {getLocalePrice(currPrice)}
      </CurrPriceLabel>
    </>
  );
};

const RangeStyle = styled.input`
  width: 100%;
  height: 0.8em;
  border-radius: 0.3em;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.primary_400};
    cursor: pointer;
  }
`;

const CurrPriceLabel = styled.label`
  display: block;
  text-align: right;
`;
