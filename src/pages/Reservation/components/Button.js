import React from 'react';
import styled from 'styled-components';

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

const StyledButton = styled.input`
  width: 250px;
  height: 50px;
  border: 1px solid ${props => props.theme.color.gray_300};
  border-radius: 4px;
  padding: 10px 12px;
  font-size: 16px;
  font-weight: bold;
  color: ${props => (props.color ? props.color : 'black')};
  background-color: ${props => (props.bgc ? props.bgc : 'white')};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;
