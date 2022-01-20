import styled, { keyframes } from 'styled-components';
const IMAGES = Array(100).fill(0);
const INIT_QUERY_KEYS = [
  'departure_date',
  'arrival_date',
  'departure_city',
  'arrival_city',
  'departure_city_code',
  'arrival_city_code',
];

const FlightLoading = ({ getFilteredParams, fadeOutImgLoading }) => {
  const destructedParams = getFilteredParams(INIT_QUERY_KEYS);

  function preventAnimationEndBubble(e) {
    e.stopPropagation();
  }

  return (
    <Container onAnimationEnd={fadeOutImgLoading}>
      <BlackBox onAnimationEnd={preventAnimationEndBubble} />
      <FlightInfoBox onAnimationEnd={preventAnimationEndBubble}>
        <Title>
          제주에서 여수까지
          <br />
          왕복 항공권을 찾고 있습니다.
        </Title>
        <FlightsBox>
          <FlexCol>
            <TypoGraphy size="lg">
              {destructedParams.departure_city_code}
            </TypoGraphy>
            <TypoGraphy>{destructedParams.departure_city}</TypoGraphy>
            <TypoGraphy>{destructedParams.departure_date}</TypoGraphy>
          </FlexCol>
          <FlexCol>
            <TypoGraphy size="lg">
              {destructedParams.arrival_city_code}
            </TypoGraphy>
            <TypoGraphy>{destructedParams.arrival_city}</TypoGraphy>
            <TypoGraphy>{destructedParams.arrival_date}</TypoGraphy>
          </FlexCol>
        </FlightsBox>
        <p>마이코드트립 항공권 구매자를 위한</p>
        <TypoGraphy>랜터카 특별 혜택! 진짜 최저가로 예약하세요</TypoGraphy>
      </FlightInfoBox>
      <ImgBox onAnimationEnd={preventAnimationEndBubble}>
        {IMAGES.map((_, idx) => (
          <CellLoadingImg key={idx} x={idx % 10} y={Math.floor(idx / 10)} />
        ))}
      </ImgBox>
    </Container>
  );
};

export default FlightLoading;

const contentFadeOut = keyframes`
  99%{ 
    opacity: 1;
  }
  100% { 
    z-index: -1;
    opacity: 0;
  }
`;

const Container = styled.section`
  --content-fadeout-delay: 3s;
  --component-fadeout-delay: 7s;

  position: absolute;
  inset: 0;
  z-index: 10;
  max-height: 100vh;
  overflow: hidden;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  animation: ${contentFadeOut} forwards;
  animation-delay: var(--component-fadeout-delay);
`;

const BlackBox = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${contentFadeOut} forwards;
`;

const FlightInfoBox = styled.div`
  position: absolute;
  inset: 10% 30%;
  z-index: 10;
  animation: ${contentFadeOut} forwards;
  animation-delay: var(--content-fadeout-delay);
`;

const Title = styled.h2``;

const FlightsBox = styled.div`
  ${({ theme }) => theme.flex}
  justify-content: space-around;
  margin: 0.75em;
  padding-block: 1.25em;
  border-block: 1px solid ${({ theme }) => theme.color.gray_500};
`;

const FlexCol = styled.div`
  ${({ theme }) => theme.columnFlex};
  text-align: center;
`;

const TypoGraphy = styled.p`
  font-size: ${({ size }) => size === 'lg' && `2rem`};
  font-weight: bold;
`;

const ImgBox = styled.section`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(6, 1fr);
  transform-style: preserve-3d;
  perspective: 10px;
  perspective-origin: left;
`;

const imageCellFadeOut = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: translate3d(10px, 10px, 1px) scale(1.1);
    border-radius: 2rem;
    opacity: 0.5;
  }
  70% {
    transform: translate3d(10px, 10px, 0px) scale(1);
    border-radius: 2rem;
  }
  100% {
    transform: translate3d(0,0,0) scale(0);
    opacity: 0;
  }
`;

const CellLoadingImg = styled.div`
  min-width: 100%;
  aspect-ratio: 1/ 1;
  background: url('./images/FlightLoading.jpg') center/ 1000% no-repeat;
  background-position: ${({ x, y }) => `${x * 10}% ${y * 17.5}%`};

  animation: ${imageCellFadeOut} forwards 500ms ease-in;
  animation-delay: ${({ x, y }) => `${(x + y) * 0.2 + 3}s`};
`;
