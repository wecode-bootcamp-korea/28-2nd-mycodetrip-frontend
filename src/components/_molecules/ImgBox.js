import styled from 'styled-components';
const IMAGES = Array(100).fill(0);

export const ImgBox = () => {
  return (
    <ImgBoxStyle>
      {IMAGES.map((_, idx) => (
        <CellImg key={idx} x={idx % 10} y={Math.floor(idx / 10)} />
      ))}
    </ImgBoxStyle>
  );
};

const ImgBoxStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(6, 1fr);
  transform-style: preserve-3d;
  perspective: 10px;
  perspective-origin: left;
`;

const CellImg = styled.div`
  min-width: 100%;
  aspect-ratio: 1/ 1;
  background: url('./images/FlightLoading.jpg') center / 1000% no-repeat;
  background-position: ${({ x, y }) => `${x * 10}% ${y * 17.5}%`};
  animation: ${({ theme }) => theme.animation.cellFadeOut} forwards 500ms
    ease-in;
  animation-delay: ${({ x, y }) => `${(x + y) * 0.2 + 3}s`};
`;
