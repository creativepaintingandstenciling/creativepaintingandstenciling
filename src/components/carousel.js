import React, { useEffect, useRef } from 'react';
// import styled from 'styled-components';
import Flickity from 'flickity';

function Carousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    new Flickity(carouselRef.current, {});
  }, []);

  return (
    <div ref={carouselRef}>
      <div>
        <img />
      </div>
    </div>
  );
}

export default Carousel;
