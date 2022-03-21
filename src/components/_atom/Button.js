import styled from 'styled-components';

export const CardButton = styled.button`
  padding: 0.5em 1em;
  background-color: ${({ theme, selected }) =>
    selected ? theme.color.gray_500 : theme.color.primary_400};
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    background-color: ${({ theme, selected }) =>
      selected ? theme.color.gray_600 : theme.color.primary_500};
    opacity: 1;
  }
`;
