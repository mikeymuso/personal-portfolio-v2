import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Slider = ({ onChange }) => {
  const images = [
    { img: './images/blog-bkgd-img.png', alt: 'blog website' },
    { img: './images/pcotton-bkgd-img.png', alt: 'landscape photography' },
  ];

  const renderedSlides = images.map(({ img, alt }) => {
    return (
      <SplideSlide key={img}>
        <img src={img} alt={alt} />
      </SplideSlide>
    );
  });

  const handleMove = (splide, prev, next) => {
    onChange(prev);
  };

  return (
    <div className="slider">
      <Splide
        onMoved={(splide, prev, next) => {
          handleMove(splide, prev, next);
        }}
        options={{
          type: 'loop',
          speed: 800,
          easing: 'ease',
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          arrows: 'slider',
        }}
        hasSliderWrapper
      >
        {renderedSlides}
      </Splide>
    </div>
  );
};

export default Slider;
