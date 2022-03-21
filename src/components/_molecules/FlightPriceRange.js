import { Range } from '../_atom';
import { DropDownBox } from './DropDownBox';

export const FlightPriceRange = ({ maxprice, updateParams, searchParams }) => {
  const currPrice = parseInt(searchParams.get('maxprice') ?? maxprice);
  const updatePrice = e => {
    updateParams({ maxprice: e.target.value });
  };

  return (
    <DropDownBox title="가격대">
      <Range
        currPrice={currPrice}
        maxprice={maxprice}
        updatePrice={updatePrice}
      />
    </DropDownBox>
  );
};
