import styled, { css } from 'styled-components';
import { CgArrowLongRight } from 'react-icons/cg';

const FlightBadge = ({ flightType, flightInfo, size = 'md', children }) => {
  const isDepatureOrArrive = flightType === 0 ? '가는편' : '오는편';

  return (
    <Container size={size}>
      <InfoBadge>{isDepatureOrArrive}</InfoBadge>
      <Flex>
        <span>{flightInfo?.departure?.city}</span>
        <CgArrowLongRight />
        <span>{flightInfo?.arrival?.city}</span>
      </Flex>
      {children}
    </Container>
  );
};

export default FlightBadge;

const Container = styled.div`
  ${({ theme }) => theme.flex};
  margin-right: 2em;
  font-size: 0.875em;

  ${({ size }) =>
    size === 'lg' &&
    css`
      font-size: 1.125rem;
      padding-block: 1em;
    `}

  p:last-child {
    margin-left: 1rem;
  }
`;

const InfoBadge = styled.div`
  margin-right: 1em;
  padding: 0.25em 0.65em;
  background-color: ${({ theme }) => theme.color.primary_400};
  color: ${({ theme }) => theme.color.white};
  font-size: 0.8em;
`;

const Flex = styled.div`
  ${({ theme }) => theme.flex};
  gap: 0.5em;

  svg {
    margin-inline: 0.5em;
    color: ${({ theme }) => theme.color.gray_500};
    transform: scale(1.5, 0.5);
  }
`;
