import styled from 'styled-components';

export const Flex = styled.div`
  ${({ theme }) => theme.flex};
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  gap: 0.5rem;

  margin-block: ${({ marginBlock }) => marginBlock}rem;
  margin-bottom: ${({ mb }) => mb}rem;
  cursor: ${({ pointer }) => pointer && 'pointer'};
`;

export const FlexCol = styled.div`
  ${({ theme }) => theme.columnFlex};
  gap: 0.5rem;
`;
