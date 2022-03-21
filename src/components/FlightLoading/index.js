import styled from 'styled-components';
import { ImgBox } from '../_molecules';
import { LoadingTable } from '../_organism';

const FlightLoading = ({ getFilteredParams, updateParams }) => {
  // loading 종료시 시행되는 함수 -> 왜필요? -> 전역상태로 현재 페이지에 처음 들어왔는지를 체크하기 위함
  const fadeOutImgLoading = e => {
    updateParams({ imgLoading: 'NO' });
  };

  return (
    <Container>
      <BlackBox onAnimationEnd={fadeOutImgLoading} />
      <LoadingTable getFilteredParams={getFilteredParams} />
      <ImgBox />
    </Container>
  );
};
export default FlightLoading;

const Container = styled.div`
  --loading-cell-fadeout: 3s;
  --loading-fadeout: 7s;

  position: fixed;
  inset: 0;
  z-index: 10;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  animation: ${({ theme }) => theme.animation.fadeOut} forwards 10ms ease-out;
  animation-delay: var(--loading-fadeout);
`;

const BlackBox = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${({ theme }) => theme.animation.fadeOut} forwards 10ms ease-out;
  animation-delay: var(--loading-fadeout);
`;
