import { useState } from 'react';
import styled from 'styled-components';
import { Flex, Title } from '../_atom';
import { IoIosArrowDown } from 'react-icons/io';

export const DropDownBox = ({ title, children }) => {
  const [isShown, setIsShown] = useState(true);
  return (
    <Container>
      <Flex
        justify="space-between"
        pointer
        onClick={() => setIsShown(!isShown)}
      >
        <Title size={2}>{title}</Title>
        <DropDownArrow isShown={isShown} />
      </Flex>
      <ContentBox isShown={isShown}>{children}</ContentBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin-bottom: 3.5rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.color.gray_500};
`;

const DropDownArrow = styled(IoIosArrowDown)`
  transform: rotate(${({ isShown }) => !isShown && 180}deg);
  transition: transform 350ms ease-in;
`;

const ContentBox = styled.div`
  margin-top: 1.5em;
  transform: scaleY(${({ isShown }) => (isShown ? 1 : 0)});
  transform-origin: top;
  transition: transform 350ms ease-in;
`;
