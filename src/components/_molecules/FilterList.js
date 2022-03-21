import { DropDownBox } from './';
import FilterItem from './FilterItem';

import useQueryString from '../../hooks/useQueryString';

function FilterList({ option }) {
  const { searchParams, toggleQueryString } = useQueryString();
  const { type: optionKey } = option;

  function toggleOption(selectedID) {
    toggleQueryString(option.data, optionKey, selectedID);
  }

  return (
    <DropDownBox title={option?.title}>
      {option?.data?.map(({ name: content, id }, idx) => (
        <FilterItem
          key={idx}
          optionKey={option.type}
          content={content}
          id={id}
          toggleOption={toggleOption}
          searchParams={searchParams}
        />
      ))}
    </DropDownBox>
  );
}

export default FilterList;
