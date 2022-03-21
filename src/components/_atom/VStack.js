import styled from 'styled-components';

export const VStack = styled.div`
  gap: ${({ gutter }) => `${0.25 * gutter}em`};
  ${({ theme }) => theme.columnFlex};
  align-items: ${({ align }) => align ?? 'flex-start'};
`;
