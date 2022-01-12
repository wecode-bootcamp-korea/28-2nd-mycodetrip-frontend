import React from 'react';
import styled from 'styled-components';

export default function Input({ children, ...rest }) {
  return <StyledInput {...rest}>{children}</StyledInput>;
}

const StyledInput = styled.input`
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
    border: 1px solid
      ${props => (props.focus ? props.theme.color.primary_400 : '#f77f01')};
    box-shadow: inset 0 0 0 1px
      ${props => (props.focus ? props.theme.color.primary_400 : '#f77f01')};
  }

  ::placeholder {
    color: ${props => props.theme.color.gray_300};
  }
`;
