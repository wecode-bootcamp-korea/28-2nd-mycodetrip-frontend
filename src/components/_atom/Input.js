import styled from 'styled-components';

export const Input = styled.input`
  display: none;

  &:not(:checked) ~ label > svg {
    opacity: 0;
  }

  &:not(:checked) ~ label::after {
    opacity: 0;
  }
`;

export const Label = styled.label`
  position: relative;
  display: inline-flex;

  width: 100%;
  padding-left: 2em;
  text-align: left;
  cursor: pointer;

  // for checkBox
  svg {
    position: absolute;
    left: 0.125em;
    color: ${({ theme }) => theme.color.white};
    z-index: 1;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 0.25em;
    border: 1px solid ${({ theme }) => theme.color.gray_800};
  }

  &::after {
    background-color: ${({ theme }) => theme.color.primary_400};
  }
`;
