import { FilterList } from '../_molecules';
import { AT_TIME_DATA } from '../../constant/filterOption';

function FlightFilter({ airlineOption, seatOption }) {
  const options = [
    {
      type: airlineOption?.type ?? [],
      title: '항공기',
      data: airlineOption?.data ?? [],
    },
    {
      type: 'at_time',
      title: '출발시간',
      data: AT_TIME_DATA,
    },
    {
      type: seatOption?.type ?? [],
      title: '좌석 종류',
      data: seatOption?.data ?? [],
    },
  ];

  return (
    <>
      {options.map((option, idx) => (
        <FilterList key={idx} option={option} />
      ))}
    </>
  );
}

export default FlightFilter;
