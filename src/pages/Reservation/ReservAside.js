import React, { useState, useEffect } from 'react';
import StickyBox from 'react-sticky-box';
import { IoIosArrowForward } from 'react-icons/io';
import { POST_PERSONALINFORMATION_API } from '../../config/config.js';
import Button from './components/Button.js';
import styled from 'styled-components';

export default function ReservAside({
  totalPrice,
  bookerInfo,
  passengerInfoList,
  adult,
  returnFlight,
  departureFlight,
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

  const discountedPrice = (totalPrice * adult - 2000).toLocaleString();

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
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify({
      customer: bookerInfo,
      passengerInfo: passengerInfoList,
      total_price: totalPrice * adult - 2000,
      number_of_tickets: adult,
      flight_seats_id: [departureFlight, returnFlight],
      payments_method: 'card',
    }),
  };

  const submitPersonalInfo = () => {
    fetch(POST_PERSONALINFORMATION_API, {
      method: 'POST',
      ...submitPersonalInfoForm,
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          alert(
            '결제되셨습니다. 자세한 정보는 마이페이지에서 확인할 수 있습니다'
          );
        }
      });
    // .catch(err => console.log('err with', err, ''));
  };

  return (
    <Griditem>
      <StickyBox offsetTop={30} offsetBottom={40}>
        <Container position={asideFixer}>
          <P>결제 정보</P>
          <FatHr />
          <Row>
            <span>주문 금액</span>
            <span>{(totalPrice * adult).toLocaleString()}원</span>
          </Row>
          <Row>
            <span>발권 수수료 면제</span>
            <span>-2,000원</span>
          </Row>
          <br />
          <TotalPrice>
            <span>총 결제 금액</span>
            <span>{discountedPrice}원</span>
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
              onClick={submitPersonalInfo}
              value="결제하기"
              disabled={!isCheckedAll}
              bgc={props => props.theme.color.primary_400}
              color="white"
            />
          </Row>
        </Container>
      </StickyBox>
    </Griditem>
  );
}

const Griditem = styled.div`
  grid-area: aside;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  top: 30px;
  width: 340px;
  padding: 30px;
  border: 1px solid ${props => props.theme.color.gray_300};
  border-radius: 4px;
  margin-bottom: 70px;
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
  position: relative;
  padding: 10px;
  margin: 5px;
  border: 1px solid ${props => props.theme.color.gray_300};
  color: ${props => props.theme.color.gray_500};
  border-radius: 4px;
  font-size: 14px;

  .icon {
    position: absolute;
    right: 20px;
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;
