import styled from 'styled-components';
import { VStack, Title } from '../_atom';

function FlightLogo({ flightImg, airline, aircraft }) {
  return (
    <Container>
      <LogoImg src={flightImg} alt="logo" />
      <VStack>
        <Title level={3} weight="500" size={2}>
          {airline}
        </Title>
        <Title level={4} weight="400" size={1}>
          {aircraft}
        </Title>
      </VStack>
    </Container>
  );
}

export default FlightLogo;

const Container = styled.section`
  ${({ theme }) => theme.flex};
  justify-content: center;
  gap: 1em;
`;

const LogoImg = styled.img`
  max-width: 2.5rem;
`;
