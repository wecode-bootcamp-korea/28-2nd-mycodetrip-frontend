import { useState } from 'react';

import SelectCities from '../SelectCities/SelectCities';

import styled from 'styled-components';

import { ImLoop } from 'react-icons/im';

const RouteSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    departure: false,
    arrival: false,
  });

  const modalOpen = e => {
    const { name } = e.target;
    setIsModalOpen({ ...isModalOpen, [name]: true });
  };

  return (
    <RouteSearchWrap>
      <InputWrap>
        <RouteInput
          onClick={modalOpen}
          name="departure"
          value="서울"
          type="text"
          placeholder="출발지가 어디인가요?"
          readOnly="readonly"
        />
        {isModalOpen.departure && (
          <SelectCities
            name="departure"
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </InputWrap>
      <SubstituteBtn>
        <ImLoop />
      </SubstituteBtn>
      <InputWrap>
        <RouteInput
          onClick={modalOpen}
          name="arrival"
          type="text"
          placeholder="도착지가 어디인가요?"
          readOnly="readonly"
        />
        {isModalOpen.arrival && (
          <SelectCities
            name="arrival"
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </InputWrap>
    </RouteSearchWrap>
  );
};

export default RouteSearch;

const RouteSearchWrap = styled.section`
  margin: 50px auto; // 컴포넌트 합치면 제거 예정
  width: 422px;
  height: 48px;
  line-height: 48px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.2s ease;
`;

const InputWrap = styled.div`
  position: relative;
  width: 195px;
  height: 48px;
  display: inline-block;
`;

const RouteInput = styled.input`
  width: 100%;
  height: 100%;
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
