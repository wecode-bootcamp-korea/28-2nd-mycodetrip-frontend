import { useState, useEffect } from 'react';

import useQueryString from '../../../hooks/useQueryString';

import SelectCities from './../../Modals/SelectCities/SelectCities';

import styled from 'styled-components';

import { ImLoop } from 'react-icons/im';

import { GET_SELECT_CITIES_API } from '../../../config/config.js';

const RouteSearch = () => {
  const { searchParams } = useQueryString();
  const [citiesData, setCitiesData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState({
    departure_city: false,
    arrival_city: false,
  });

  useEffect(() => {
    fetch(`${GET_SELECT_CITIES_API}`)
      .then(response => response.json())
      .then(data => {
        setCitiesData(data.result.data);
      });
  }, []);

  const modalOpen = e => {
    const { name } = e.target;
    setIsModalOpen({ ...isModalOpen, [name]: true });
  };

  const departure_city = searchParams.get('departure_city');
  const arrival_city = searchParams.get('arrival_city');

  const findCityNameByCode = code => {
    const fetchedCities = citiesData.reduce((acc, countryObj) => {
      for (const cityObj of countryObj.city) {
        acc.push(cityObj);
      }
      return acc;
    }, []);
    const matchedCityByCode = fetchedCities.filter(city => city.code === code);
    return matchedCityByCode;
  };

  const currentRouteObj = (defaultName, defaultCode, cityCodeByParams) => {
    const matchedCity = findCityNameByCode(cityCodeByParams)[0];
    return matchedCity
      ? `${matchedCity.name} ${matchedCity.code}`
      : `${defaultName} ${defaultCode}`;
  };

  const currDepartureObj = currentRouteObj('서울', 'SEL', departure_city);
  const currArrivalObj = currentRouteObj('', '', arrival_city);

  return (
    <RouteSearchWrap>
      <InputWrap>
        <RouteInput
          onClick={modalOpen}
          name="departure_city"
          value={currDepartureObj}
          type="text"
          placeholder="출발지가 어디인가요?"
          readOnly="readonly"
        />
        {isModalOpen.departure_city && (
          <SelectCities
            citiesData={citiesData}
            routeName="departure_city"
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
          name="arrival_city"
          value={currArrivalObj}
          type="text"
          placeholder="도착지가 어디인가요?"
          readOnly="readonly"
        />
        {isModalOpen.arrival_city && (
          <SelectCities
            citiesData={citiesData}
            routeName="arrival_city"
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
  /* margin: 50px auto; // 컴포넌트 합치면 제거 예정 */
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
