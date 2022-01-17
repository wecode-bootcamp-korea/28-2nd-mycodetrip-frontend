import { useState } from 'react';

import styled from 'styled-components';

import { MdDateRange } from 'react-icons/md';

import DatePicker from 'react-datepicker'; // DatePicker 라는 컴포넌트도 가져오깅
import 'react-datepicker/dist/react-datepicker.css'; // 스타일 맥이기
import { ko } from 'date-fns/esm/locale';

const DatePick = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <DateWrap>
      <DateRange>
        <MdDateRange />
      </DateRange>
      <DatePicker
        locale={ko}
        dateFormat="MM월 dd일"
        selectsRange={true}
        monthsShown={2}
        className="input-datepicker"
        minDate={new Date()}
        placeholderText="가는날 오는날 선택"
        startDate={startDate}
        endDate={endDate}
        onChange={update => {
          setDateRange(update);
        }}
        isClearable={true}
      />
    </DateWrap>
  );
};

export default DatePick;

const DateWrap = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  width: 290px;
  height: 48px;
  margin-left: 4px;
  background: #fff;
  border-radius: 2px;

  // date input
  .react-datepicker-wrapper {
    height: 100%;

    .react-datepicker__input-container {
      height: 100%;

      .input-datepicker {
        display: block;
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-weight: 700;
        border-radius: 2px;
        color: #343a40;
      }
    }
  }

  // modal date
  .react-datepicker-popper {
    transform: translate3d(0px, 48px, 0px) !important;
    position: relative;
    width: 608px;
    padding: 0;
    margin-top: 12px;
    background-color: #fff;
    box-shadow: 0 0 1px 0 rgb(0 0 0 / 10%), 0 1px 4px 0 rgb(0 0 0 / 15%);
    border-radius: 2px;
    z-index: 100;

    .react-datepicker__triangle {
      display: none;
    }

    .react-datepicker {
      width: 100%;
      margin: 20px 0 14px;
      border: none;

      .react-datepicker__month-container {
        width: 50%;

        .react-datepicker__header {
          background: #fff;
          border-bottom: 0px;
          padding: 0;

          .react-datepicker__current-month {
            position: relative;
            height: 24px;
            line-height: 24px;
            margin-bottom: 24px;
            text-align: center;
            font-size: 20px;
            font-weight: 400;
          }

          .react-datepicker__day-name {
            height: 16px;
            padding-bottom: 8px;
            line-height: 16px;
            font-size: 12px;
            color: #666d75 !important;
          }
        }
      }
    }
  }
`;

const DateRange = styled.i`
  svg {
    width: 30px;
    height: 30px;
    margin: 0px 10px;
    color: #51abf3;
  }
`;
