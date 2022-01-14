import styled from 'styled-components';

const SelectPassenger = () => {
  return (
    <ModalWrap>
      <TopSection>
        <CloseBtn>x button</CloseBtn>
        <Title>인원 & 좌석등급</Title>
      </TopSection>
      <BottomSection>
        <Passengers>
          <dl>
            <dt>
              성인
              <span>만 12세 이상</span>
            </dt>
            <dd>
              <button type="button">-</button>
              <span>1</span>
              <button type="button">+</button>
            </dd>
          </dl>
        </Passengers>
        <Seats>
          <label>
            <input type="radio" name="seat" />
            이코노미
          </label>
          <label>
            <input type="radio" name="seat" />
            비즈니스
          </label>
          <label>
            <input type="radio" name="seat" />
            일반
          </label>
        </Seats>
      </BottomSection>
    </ModalWrap>
  );
};

export default SelectPassenger;

const ModalWrap = styled.section`
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
  border-bottom: none;
`;

const CloseBtn = styled.button``;

const Title = styled.h3``;

const BottomSection = styled.section``;

const Passengers = styled.div``;

const Seats = styled.div``;
