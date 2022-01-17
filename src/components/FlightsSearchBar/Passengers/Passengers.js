import { useState } from 'react';
import SelectPassenger from './../../Modals/SelectPassenger/SelectPassenger';

import styled from 'styled-components';

import { BsPerson } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

// import { GET_SELECTCITIES_API } from '../../../config/config.js';

const Passengers = () => {
  const [personCount, setPersonCount] = useState(1);
  const [checkedSeat, setCheckedSeat] = useState('이코노미');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPassengerModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <ModalBackGround onClick={openPassengerModal} />}
      <PassengersWrap>
        <BsPerson />
        <PassengerSeat onClick={openPassengerModal}>
          승객 {personCount}명, {checkedSeat}석
        </PassengerSeat>
        <IoIosArrowDown />
        {isModalOpen && (
          <SelectPassenger
            personCount={personCount}
            setPersonCount={setPersonCount}
            setCheckedSeat={setCheckedSeat}
          />
        )}

        {/* modal 조건 */}
      </PassengersWrap>
    </>
  );
};

export default Passengers;

const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background: rgba(0, 0, 0, 0.55);
`;

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
  & > svg {
    width: 25px;
    height: 25px;
    margin: 0px 10px;
  }

  & > svg:first-of-type {
    color: #51abf3;
  }

  & > svg:last-of-type {
    color: #394154;
  }
`;

const PassengerSeat = styled.p`
  flex: 1;
  font-size: 16px;
  font-weight: 700;
  vertical-align: middle;
  color: #343a40;
  cursor: pointer;
`;
