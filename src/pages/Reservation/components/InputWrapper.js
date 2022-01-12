import React from 'react';
import styled from 'styled-components';

export default function InputWrapper({ children, ...rest }) {
  return <StyledInputWrapper {...rest}>{children}</StyledInputWrapper>;
}

const StyledInputWrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: 25px 5px 5px 5px;

  label {
    padding-bottom: 8px;
    font-size: 14px;
  }

  span {
    padding: 5px 0px;
    font-size: 12px;
  }

  .noticeAboutInput {
    color: ${props => props.theme.color.gray_500};
  }

  .validationHint {
    color: #f77f01;
  }
`;
