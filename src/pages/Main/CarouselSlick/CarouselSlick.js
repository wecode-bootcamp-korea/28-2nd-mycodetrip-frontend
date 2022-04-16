import styled from 'styled-components';

import Slider from 'react-slick';

const bannerImgs = [
  {
    id: 1,
    img: '/images/banners/banner_0.png',
  },
  {
    id: 2,
    img: '/images/banners/banner_1.png',
  },
  {
    id: 3,
    img: '/images/banners/banner_2.png',
  },
  {
    id: 4,
    img: '/images/banners/banner_3.png',
  },
];

const CarouselSlick = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <Container>
      <StyledSlider {...sliderSettings}>
        {bannerImgs.map(banner => (
          <img key={banner.id} src={banner.img} alt={`banner${banner.id}`} />
        ))}
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
