import React, { useState, useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
// import { POST_PERSONALINFORMATION_API } from '../../config/config.js';
import Button from './components/Button.js';
import styled from 'styled-components';

export default function ReservAside({
  totalPrice,
  bookerInfo,
  passengerInfoList,
}) {
  const [asideFixer, setAsideFixer] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    agreementForCommon: false,
    agreementForPayment: false,
    agreementForChange: false,
    agreementForPrivacy: false,
  });

  useEffect(() => {
    const checkYPosition = () =>
      window.addEventListener('scroll', switchAsideFixer);
    checkYPosition();
  });

  const switchAsideFixer = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 140 && asideFixer === false) {
      setAsideFixer(true);
    } else if (scrollY < 140 && asideFixer === true) {
      setAsideFixer(false);
    } else {
      return;
    }
  };

  const handleAllCheckbox = e => {
    const { checked } = e.target;
    if (checked) {
      setCheckedItems({
        agreementForCommon: true,
        agreementForPayment: true,
        agreementForChange: true,
        agreementForPrivacy: true,
      });
    } else {
      setCheckedItems({
        agreementForCommon: false,
        agreementForPayment: false,
        agreementForChange: false,
        agreementForPrivacy: false,
      });
    }
  };

  const handleSingleCheckbox = e => {
    const { id, checked } = e.target;
    if (checked) {
      setCheckedItems({ ...checkedItems, [id]: true });
    } else {
      setCheckedItems({ ...checkedItems, [id]: false });
    }
  };

  const isCheckedAll = Object.values(checkedItems).every(v => !!v);

  const submitPersonalInfoForm = {
    headers: {
      // Authorization: localStorage.getItem('jwt_token'),
    },
    body: JSON.stringify({
      customer: bookerInfo,
      passengerInfo: passengerInfoList,
      nickname: 'dfdfd',
      kakao_id: 'kakao',
      total_price: totalPrice,
      number_of_tickets: 3,
      flight_seats_id: [1, 2],
      payments_method: 'card',
    }),
  };

  // const submitPersonalInfo = () => {
  //   fetch(POST_PERSONALINFORMATION_API, {
  //     method: 'POST',
  //     ...submitPersonalInfoForm,
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // };

  return (
    <Griditem>
      <Container position={asideFixer}>
        <P>결제 정보</P>
        <FatHr />
        <Row>
          <span>주문 금액</span>
          <span>{totalPrice}원</span>
        </Row>
        <Row>
          <span>발권 수수료 면제</span>
          <span>-2000원</span>
        </Row>
        <br />
        <TotalPrice>
          <span>총 결제 금액</span>
          <span>{totalPrice - 2000}원</span>
        </TotalPrice>
        <br />
        <P>약관 동의</P>
        <FatHr />
        <Row justifycontent="start">
          <Checkbox
            id="agreementForAll"
            onChange={handleAllCheckbox}
            checked={isCheckedAll}
          />
          <label htmlFor="agreementForAll">전체 약관 동의</label>
        </Row>
        <Box>
          <Row justifycontent="start">
            <Checkbox
              id="agreementForCommon"
              onChange={handleSingleCheckbox}
              checked={checkedItems.agreementForCommon}
            />
            <label htmlFor="agreementForCommon">공통 안내사항 동의</label>
            <IoIosArrowForward className="icon" />
          </Row>
          <Row justifycontent="start">
            <Checkbox
              id="agreementForPayment"
              onChange={handleSingleCheckbox}
              checked={checkedItems.agreementForPayment}
            />
            <label htmlFor="agreementForPayment">결제 규정 동의</label>
            <IoIosArrowForward className="icon" />
          </Row>
          <Row justifycontent="start">
            <Checkbox
              id="agreementForChange"
              onChange={handleSingleCheckbox}
              checked={checkedItems.agreementForChange}
            />
            <label htmlFor="agreementForChange">변경 및 환불 규정 동의</label>
            <IoIosArrowForward className="icon" />
          </Row>
          <Row justifycontent="start">
            <Checkbox
              id="agreementForPrivacy"
              onChange={handleSingleCheckbox}
              checked={checkedItems.agreementForPrivacy}
            />
            <label htmlFor="agreementForPrivacy">
              개인정보 수집 및 이용내용 동의
            </label>
            <IoIosArrowForward className="icon" />
          </Row>
        </Box>
        <Row justifycontent="center">
          <Button
            type="button"
            // onClick={submitPersonalInfo}
            value="결제하기"
            disabled={!isCheckedAll}
            bgc={props => props.theme.color.primary_400}
            color="white"
          />
        </Row>
      </Container>
    </Griditem>
  );
}

const Griditem = styled.div`
  grid-area: aside;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  position: ${props => (props.position ? 'fixed' : 'absolute')};
  top: 30px;
  width: 340px;
  padding: 30px;
  border: 1px solid ${props => props.theme.color.gray_300};
  border-radius: 4px;
`;

const P = styled.p`
  font-size: 20px;
  padding: 10px 0px;
`;

const FatHr = styled.hr`
  margin: 5px 0px;
`;

const Row = styled.div`
  display: flex;
  justify-content: ${props =>
    props.justifycontent ? props.justifycontent : 'space-between'};
  padding: 5px 10px;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 338px;
  padding: 20px 40px;
  margin-left: -30px;
  color: ${props => props.theme.color.primary_400};
  background-color: #f5fbff;
  font-size: 18px;
`;

const Box = styled.div`
  padding: 10px;
  margin: 5px;
  border: 1px solid ${props => props.theme.color.gray_300};
  color: ${props => props.theme.color.gray_500};
  border-radius: 4px;
  font-size: 14px;

  .icon {
    position: absolute;
    right: 50px;
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;
