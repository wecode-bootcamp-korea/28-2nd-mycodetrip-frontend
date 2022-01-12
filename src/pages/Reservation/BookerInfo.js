import React from 'react';
import styled from 'styled-components';
import Input from './components/Input';
import InputWrapper from './components/InputWrapper';

export default function BookerInfo({ bookerInfo, setBookerInfo }) {
  const validateName = bookerInfo.name.length > 1 || bookerInfo.name === '';
  const validateEmail =
    bookerInfo.email.includes('@' && '.com') || bookerInfo.email === '';
  const validateNumber =
    bookerInfo.phonenumber.toString().length > 9 ||
    bookerInfo.phonenumber === '';

  const handleInput = e => {
    const { name, value } = e.target;
    setBookerInfo({ ...bookerInfo, [name]: value });
  };

  const getOnlyNumber = e => {
    const { name, value } = e.target;
    const reg = /[^0-9]/g;
    const toNumber = value.replace(reg, '');
    setBookerInfo({ ...bookerInfo, [name]: toNumber });
  };

  return (
    <Container>
      <P>예약자 정보 (필수)</P>
      <hr />
      <InputWrapper>
        <label htmlFor="name">예약자 이름</label>
        <Input
          type="text"
          name="name"
          id="name"
          value={bookerInfo.name}
          placeholder="홍길동"
          focus={validateName}
          onChange={handleInput}
        />

        <span className="noticeAboutInput" hidden={!validateName}>
          ㅤ
        </span>
        <span className="validationHint" hidden={validateName}>
          예약자 이름을 2자 이상 입력하세요.
        </span>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="email">이메일 주소</label>
        <Input
          type="text"
          name="email"
          id="email"
          value={bookerInfo.email}
          placeholder="ID@example.com"
          focus={validateEmail}
          onChange={handleInput}
        />
        <span className="noticeAboutInput" hidden={!validateEmail}>
          입력하신 이메일로 예약 확정 및 바우처 메일이 전송됩니다. 정확하게
          입력해주세요.
        </span>
        <span className="validationHint" hidden={validateEmail}>
          이메일 주소를 형식에 맞게 입력하세요.
        </span>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="phonenumber">휴대전화</label>
        <Input
          type="text"
          name="phonenumber"
          id="phonenumber"
          value={bookerInfo.phonenumber}
          maxLength={11}
          placeholder="'-'를 빼고 입력해주세요."
          focus={validateNumber}
          onChange={getOnlyNumber}
        />
        <span className="noticeAboutInput" hidden={!validateNumber}>
          스케쥴 변동, 결항 등의 상황 발생 시 연락할 수 있는 번호를 정확하게
          입력해주세요.
        </span>
        <span className="validationHint" hidden={validateNumber}>
          휴대전화 번호를 형식에 맞게 입력하세요.
        </span>
      </InputWrapper>
    </Container>
  );
}

const Container = styled.div`
  grid-area: booker;
  display: flex;
  flex-flow: column;
  padding: 30px 20px 0px 20px;
`;
const P = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;
