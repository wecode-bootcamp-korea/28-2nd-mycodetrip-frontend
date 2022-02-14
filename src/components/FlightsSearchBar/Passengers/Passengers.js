import { useState } from 'react';
import useQueryString from '../../../hooks/useQueryString';
import SelectPassenger from './../../Modals/SelectPassenger/SelectPassenger';
import styled from 'styled-components';
import { BsPerson } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

const Passengers = () => {
  const { searchParams, updateParams } = useQueryString();

  // const [checkedSeat, setCheckedSeat] = useState('이코노미'); // 좌석
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 오픈

  const openPassengerModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  let adult = searchParams.get('adult') * 1;

  const calcPerson = e => {
    const { name } = e.target;
    adult = name === 'plus' ? adult + 1 : adult - 1;
    updateParams({
      adult,
    });
  };

  // let seat_type = searchParams.get('seat_type');

  // const showSeat = e => {
  //   const { name } = e.target.dataset;
  //   updateParams({
  //     seat_type: name,
  //   });
  // };

  return (
    <>
      {isModalOpen && <ModalBackGround onClick={openPassengerModal} />}
      <PassengersWrap>
        <BsPerson />
        <PassengerSeat onClick={openPassengerModal}>
          승객 {adult}명, 이코노미석
        </PassengerSeat>
        <IoIosArrowDown />
        {isModalOpen && (
          <SelectPassenger
            adult={adult}
            calcPerson={calcPerson}
            // showSeat={showSeat}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
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
