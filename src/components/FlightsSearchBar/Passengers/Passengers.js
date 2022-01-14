import SelectPassenger from './../../Modals/SelectPassenger/SelectPassenger';

import styled from 'styled-components';

import { BsPerson } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

// import { GET_SELECTCITIES_API } from '../../../config/config.js';

const Passengers = () => {
  return (
    <PassengersWrap>
      <BsPerson />
      <PassengerSeat>승객 {1}명, 이코노미석</PassengerSeat>
      <IoIosArrowDown />
      <SelectPassenger />
      {/* modal 조건 */}
    </PassengersWrap>
  );
};

export default Passengers;

const PassengersWrap = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  margin-left: 4px;
  width: 270px;
  height: 48px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.2s ease;

  // icons
  svg {
    width: 25px;
    height: 25px;
    margin: 0px 10px;
  }

  svg:first-of-type {
    color: #51abf3;
  }

  svg:last-of-type {
    color: #394154;
  }
`;

const PassengerSeat = styled.p`
  flex: 1;
  font-size: 16px;
  font-weight: 700;
  vertical-align: middle;
  color: #343a40;
`;
