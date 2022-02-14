import { useEffect } from 'react';

import styled from 'styled-components';

import { FiX } from 'react-icons/fi';
import useQueryString from '../../../hooks/useQueryString';

const SelectCities = ({
  isModalOpen,
  setIsModalOpen,
  routeName,
  citiesData,
}) => {
  const { updateParams } = useQueryString();
  const hideModal = () => {
    setIsModalOpen({ ...isModalOpen, [routeName]: false });
  };

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      width: 100%;
      overflow-y: scroll;
      `;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const showCityName = e => {
    const { cityName, cityCode } = e.target.dataset;
    updateParams({
      [routeName]: cityName,
      [`${routeName}_code`]: cityCode,
    });
    hideModal();
  };

  return (
    <>
      {isModalOpen[routeName] && (
        <ModalBackGround name={routeName} onClick={hideModal} />
      )}
      <ModalWrap name={routeName}>
        <Title>도시 선택</Title>
        <CloseBtn name={routeName} onClick={hideModal}>
          <FiX />
        </CloseBtn>
        <CitiesTableWrap>
          <table>
            <Tbody>
              {citiesData.map((country, idx) => (
                <tr key={idx}>
                  <th>{country.category}</th>
                  {country.city.map(city => (
                    <td
                      key={city.id}
                      data-city-name={city.name}
                      data-city-code={city.code}
                      onClick={showCityName}
                    >
                      {city.name}
                    </td>
                  ))}
                </tr>
              ))}
            </Tbody>
          </table>
        </CitiesTableWrap>
      </ModalWrap>
    </>
  );
};

export default SelectCities;

const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background: rgba(0, 0, 0, 0.55);
`;

const ModalWrap = styled.section`
  position: absolute;
  top: 60px;
  left: 0px;
  width: 745px;
  max-width: 909px;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 15%);
  z-index: 100;
`;

const Title = styled.h4`
  padding: 28px 32px 0;
  line-height: 24px;
  font-size: 18px;
  font-weight: 600;
  color: #343a40;
`;

const CitiesTableWrap = styled.div`
  padding: 28px 32px 32px;

  table {
    width: 100%;
    font-size: 13px;
    border-top: 1px solid #dee2e6;
  }
`;

const Tbody = styled.tbody`
  tr {
    border-bottom: 1px solid #e9ecef;
    line-height: 14px;

    th {
      padding: 14px 8px;
      height: 20px;
      font-weight: 600;
      color: #343a40;
      text-align: left;
    }
    td {
      padding: 14px 8px;
      height: 20px;
      color: #495056;
    }
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 26px;
  right: 26px;
  width: 30px;
  height: 30px;
  border-radius: 2px;
  transition: all 0.08s;

  svg {
    width: 70%;
    height: 70%;
    vertical-align: middle;
  }

  &:hover {
    background-color: #dfe3e6;
  }
`;
