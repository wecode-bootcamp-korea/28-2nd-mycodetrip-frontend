import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

const SelectCities = () => {
  return (
    <ModalWrap>
      <Title>도시 선택</Title>
      <CloseBtn>
        <FiX />
      </CloseBtn>
      <CitiesTableWrap>
        <table>
          <Tbody>
            <tr>
              <th>국내</th>
              <td>제주</td>
              <td>김포</td>
              <td>인천</td>
            </tr>
            <tr>
              <th>아시아</th>
              <td>다낭</td>
              <td>대만</td>
              <td>방콕</td>
            </tr>
            <tr>
              <th>중국</th>
              <td>베이징</td>
              <td>상해</td>
              <td>리장</td>
            </tr>
          </Tbody>
        </table>
      </CitiesTableWrap>
    </ModalWrap>
  );
};

export default SelectCities;

const ModalWrap = styled.section`
  position: relative;
  width: 745px;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 15%);
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
