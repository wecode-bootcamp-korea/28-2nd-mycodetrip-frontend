import styled from 'styled-components';
import Slider from 'react-slick';

const CarouselSlick = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3500,
  };

  return (
    <Container>
      <StyledSlider {...sliderSettings}>
        <img
          src="https://images.unsplash.com/photo-1638913971789-667874197280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1641763770805-f62250258b7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1641805963238-a8d4717575d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1638913662584-731da41f5a59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
      </StyledSlider>
    </Container>
  );
};

export default CarouselSlick;

export const StyledSlider = styled(Slider)`
  height: 128px; //슬라이드 컨테이너 영역
  overflow: hidden;

  .slick-list {
    // 부모
    height: 100%;
    margin: 0 -10px;
    box-sizing: border-box;
  }

  .slick-slide > div {
    // 자식 안에 div
    margin: 10px;
    box-sizing: border-box;
  }

  // dots
  .slick-dots {
    left: 50%;
    bottom: -6px;
    width: auto;
    padding: 0px 12px;
    background-color: #fff;
    border-radius: 10.5px;
    z-index: 10;
    transform: translate(-50%, 0);

    li {
      width: 8px;
      height: 8px;
      margin: 0;

      &:last-of-type {
        margin-left: 6px;
      }

      button {
        width: 100%;
        height: 100%;
        padding: 0;

        &::before {
          width: 8px;
          height: 8px;
          position: static;
          top: auto;
          left: auto;
          right: auto;
        }
      }
    }
  }
`;

const Container = styled.article`
  position: relative;
  width: 1060px;
  margin: 48px auto;
`;
