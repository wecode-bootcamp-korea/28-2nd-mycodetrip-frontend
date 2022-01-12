import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './components/Input';
import InputWrapper from './components/InputWrapper';
import { contries } from './contriesData';

export default function PassengerInfo({
  index,
  passengerInfo,
  passengerInfoList,
  setPassengerInfoList,
}) {
  const [clickedButton, setClickedButton] = useState('');

  const validatefamily_name =
    passengerInfo.family_name.length >= 1 || passengerInfo.family_name === '';
  const validategiven_name =
    passengerInfo.given_name.length >= 1 || passengerInfo.given_name === '';
  const validatebirthday =
    passengerInfo.birthday.toString().length === 10 ||
    passengerInfo.birthday === '';

  const handleInput = e => {
    const { name, value } = e.target;
    let targetObj = { ...passengerInfoList[index], [name]: value };
    setPassengerInfoList([
      ...passengerInfoList.slice(0, index),
      targetObj,
      ...passengerInfoList.slice(index + 1),
    ]);
  };

  function formatter(data) {
    return data.split('').reduce(dividerEnhancer, '');

    function dividerEnhancer(acc, cur, idx) {
      const yearDividerIdx = 4;
      const monthDividerIdx = 6;
      const needToAddDivider =
        idx === yearDividerIdx || idx === monthDividerIdx;

      return needToAddDivider ? acc + '-' + cur : acc + cur;
    }
  }

  const getOnlyDate = e => {
    const { name, value } = e.target;
    const reg = /[^0-9]/g;
    const toNumber = value.replace(reg, '');
    const toDate = formatter(toNumber);
    let targetObj = { ...passengerInfoList[index], [name]: toDate };
    setPassengerInfoList([
      ...passengerInfoList.slice(0, index),
      targetObj,
      ...passengerInfoList.slice(index + 1),
    ]);
  };

  return (
    <Container>
      <P>탑승객 {index + 1}</P>
      <InputWrapper>
        <label htmlFor="nationality">국적</label>
        <Select name="nationality" id="nationality" onChange={handleInput}>
          {contries.map(contry => (
            <option key={contry.contryCode} value={contry.contryCode}>
              {contry.contryName}
            </option>
          ))}
        </Select>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="family_name">승객 성</label>
        <Input
          type="text"
          name="family_name"
          id="family_name"
          vlaue={passengerInfo.family_name}
          placeholder="홍"
          focus={validatefamily_name}
          onChange={handleInput}
        />
        <span className="noticeAboutInput" hidden={!validatefamily_name}>
          공항에서 제시할 신분증 상 성과 일치해야 합니다.
        </span>
        <span className="validationHint" hidden={validatefamily_name}>
          한 글자 이상 입력해 주세요.
        </span>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="given_name">승객 이름</label>
        <Input
          type="text"
          name="given_name"
          id="given_name"
          value={passengerInfo.given_name}
          placeholder="길동"
          focus={validategiven_name}
          onChange={handleInput}
        />
        <span className="noticeAboutInput" hidden={!validategiven_name}>
          공항에서 제시할 신분증 상 이름과 일치해야 합니다.
        </span>
        <span className="validationHint" hidden={validategiven_name}>
          한 글자 이상 입력해 주세요.
        </span>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="birthday">생년월일</label>
        <Input
          type="text"
          name="birthday"
          id="birthday"
          value={passengerInfo.birthday}
          maxLength={10}
          placeholder="YYYYMMDD"
          focus={validatebirthday}
          onChange={getOnlyDate}
        />
        <span className="noticeAboutInput" hidden={!validatebirthday}>
          8자리의 숫자를 입력해 주세요.
        </span>
        <span className="validationHint" hidden={validatebirthday}>
          생년월일의 형식이 유효하지 않습니다.
        </span>
      </InputWrapper>
      <ButtonWrapper>
        <WhatAreYour23thChromosomes
          name="sex"
          value="남성"
          backgroundColor={clickedButton === 'M'}
          onClick={e => {
            handleInput(e);
            setClickedButton('M');
          }}
        />
        <WhatAreYour23thChromosomes
          name="sex"
          value="여성"
          backgroundColor={clickedButton === 'F'}
          onClick={e => {
            handleInput(e);
            setClickedButton('F');
          }}
        />
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 30px;
  font-size: 11.5px;
`;
const P = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Select = styled.select`
  width: 250px;
  height: 40px;
  border: 1px solid ${props => props.theme.color.gray_300};
  border-radius: 4px;
  padding: 10px 12px;
  font-size: 14px;

  :hover {
    border: 1px solid #848c94;
  }

  :focus {
    border: 1px solid ${props => props.theme.color.primary_400};
    box-shadow: inset 0 0 0 1px ${props => props.theme.color.primary_400};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  height: 40px;
`;

const WhatAreYour23thChromosomes = styled.input.attrs({ type: 'button' })`
  width: 120px;
  height: 40px;
  border: 1px solid ${props => props.theme.color.gray_300};
  border-radius: 4px;
  background-color: ${props =>
    props.backgroundColor ? props.theme.color.primary_300 : 'white'};

  :hover {
    cursor: pointer;
  }
`;
