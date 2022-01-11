import styled from 'styled-components';
import { ImLoop } from 'react-icons/im';
import SelectCities from '../SelectCities/SelectCities';

const RouteSearch = () => {
  const modalOpen = () => {};

  return (
    <>
      <SelectCities />
      <Container>
        <RouteInput
          onClick={modalOpen}
          value="서울"
          type="text"
          placeholder="출발지가 어디인가요?"
          readOnly="readonly"
        />
        <SubstituteBtn>
          <ImLoop />
        </SubstituteBtn>
        <RouteInput
          onClick={modalOpen}
          type="text"
          placeholder="도착지가 어디인가요?"
          readOnly="readonly"
        />
      </Container>
    </>
  );
};

export default RouteSearch;

const Container = styled.section`
  margin: 50px auto; // 컴포넌트 합치면 제거 예정
  width: 422px;
  height: 48px;
  line-height: 48px;
  border-radius: 2px;
  transition: all 0.2s ease;
`;

const RouteInput = styled.input`
  width: 195px;
  height: 48px;
  padding-left: 14px;
  line-height: 48px;
  color: #343a40;
  font-size: 16px;
  font-weight: 600;
  border-radius: 2px;
`;

const SubstituteBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 2px;
  background: #f2f3f5;

  svg {
    vertical-align: middle;
  }

  &:hover {
    background: #dfe3e6;
  }
`;
