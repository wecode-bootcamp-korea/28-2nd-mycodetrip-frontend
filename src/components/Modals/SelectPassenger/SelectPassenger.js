import styled from 'styled-components';

import { FiX } from 'react-icons/fi';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const SelectPassenger = ({
  isModalOpen,
  setIsModalOpen,
  calcPerson,
  adult,
  showSeat,
}) => {
  return (
    <ModalWrap>
      <TopSection>
        <CloseBtn
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          <FiX />
        </CloseBtn>
        <Title>인원 & 좌석등급</Title>
      </TopSection>
      <BottomSection>
        <Passengers>
          <Passenger>
            <dt>
              성인
              <span>만 12세 이상</span>
            </dt>
            <PassengerCount>
              <button type="button" name="minus" onClick={calcPerson}>
                <AiOutlineMinusCircle />
              </button>
              <span>{adult}</span>
              <button type="button" name="plus" onClick={calcPerson}>
                <AiOutlinePlusCircle />
              </button>
            </PassengerCount>
          </Passenger>
          <Passenger>
            <dt>
              소아
              <span>만 12세 미만</span>
            </dt>
            <PassengerCount>
              <button type="button">
                <AiOutlineMinusCircle />
              </button>
              <span>0</span>
              <button type="button">
                <AiOutlinePlusCircle />
              </button>
            </PassengerCount>
          </Passenger>
          <Passenger>
            <dt>
              유아
              <span>24개월 미만</span>
            </dt>
            <PassengerCount>
              <button type="button">
                <AiOutlineMinusCircle />
              </button>
              <span>0</span>
              <button type="button">
                <AiOutlinePlusCircle />
              </button>
            </PassengerCount>
          </Passenger>
        </Passengers>
        <Seats>
          <SeatLabel onClick={showSeat} data-name="이코노미">
            <input
              type="radio"
              name="seat"
              defaultChecked={true}
              data-name="이코노미"
            />
            이코노미
          </SeatLabel>
          <SeatLabel onClick={showSeat} data-name="비즈니스">
            <input type="radio" name="seat" data-name="비즈니스" />
            비즈니스
          </SeatLabel>
          <SeatLabel onClick={showSeat} data-name="일반">
            <input type="radio" name="seat" data-name="일반" />
            일반
          </SeatLabel>
        </Seats>
      </BottomSection>
    </ModalWrap>
  );
};

export default SelectPassenger;

const ModalWrap = styled.section`
  svg {
    pointer-events: none;
  }

  position: absolute;
  top: 60px;
  width: 344px;
  border-radius: 3px;
  background: #fff;
  z-index: 100;
  box-shadow: 0 0 1px 0 rgb(0 0 0 / 10%), 0 1px 4px 0 rgb(0 0 0 / 15%);
`;

const TopSection = styled.section`
  position: relative;
  line-height: 20px;
  color: #343a40;
  padding: 20px 24px 24px 24px;
  font-size: 14px;
  font-weight: 600;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  svg {
    width: 24px;
    height: 24px;
    margin: 0;
  }
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
`;

const BottomSection = styled.section``;

const Passengers = styled.div`
  padding: 0 24px 24px 24px;
`;

const Passenger = styled.dl`
  display: flex;
  justify-content: space-between;

  &:not(:first-of-type) {
    margin-top: 16px;
  }

  dt span {
    display: block;
    margin-top: 4px;
    font-size: 12px;
    color: #adb5bd;
    font-weight: normal;
    line-height: 14px;
  }
`;

const PassengerCount = styled.dd`
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-top: 1px;

  button {
    svg {
      width: 32px;
      height: 32px;
      margin: 0;
      color: #51abf3;
    }
  }

  span {
    width: 36px;
    height: 32px;
    line-height: 32px;
    font-size: 16px;
    text-align: center;
    font-weight: 500;
  }
`;

const Seats = styled.div`
  display: flex;
  padding: 20px 24px 24px 24px;
  border-top: 1px solid #f1f3f5;
`;

const SeatLabel = styled.label`
  display: inline-block;
  width: 33.3333%;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  cursor: pointer;

  input[type='radio'] {
    display: inline-block;
    vertical-align: top;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    border: 1px solid #ced4da;
    box-sizing: border-box;
    border-radius: 100%;
    background-color: #fff;
    transition: all 0.08s ease-out;
  }
`;
