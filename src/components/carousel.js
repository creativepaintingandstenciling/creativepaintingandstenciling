import React, { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Button as BaseButton } from 'rebass';
import Flickity from 'flickity';

// const arrowIconStyles = styled.css`
//   filter: drop-shadow(5px 5px 5px #222);
//   -webkit-backface-visibility: hidden;
//   backface-visibility: hidden;
// `;

const Svg = styled.svg`
  overflow: visible;
  width: 0.625em;
  vertical-align: -0.225em;
  font-size: 1.33333em;
  line-height: 0.75em;
  display: inline-block;
  height: 1em;
`;

const Button = styled(BaseButton)`
  color: #fff;
  position: absolute;
  top: 0;
  z-index: 1;
  touch-action: manipulation;
  height: 100%;

  &:first-of-type {
    padding-right: 24px;
  }
  &:last-of-type {
    right: 0;
    padding-left: 24px;
  }
  &:hover {
    color: #ccc;
  }
`;

const CELL_CLASS_NAME = 'image-slider-cell';

function Carousel() {
  const carouselRef = useRef(null);
  const imageIndicies = [1, 4];

  useEffect(() => {
    new Flickity(carouselRef.current, {
      wrapAround: true,
      lazyLoad: true,
      pageDots: false,
      prevNextButtons: false,
      imagesLoaded: true,
      cellSelector: `.${CELL_CLASS_NAME}`,
    });
  }, []);

  const handlePrev = useCallback(event => {
    event.preventDefault();
    carouselRef.current.previous();
  }, []);

  const handleNext = useCallback(event => {
    event.preventDefault();
    carouselRef.current.next();
  }, []);

  return (
    <div ref={carouselRef}>
      {imageIndicies.map(index => (
        <div key={index} className={CELL_CLASS_NAME}>
          <img src={require(`../images/creative-painting-stenciling-${index}.jpg`)} />
        </div>
      ))}

      <Button type="button" variant="transparent" onClick={handlePrev}>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="1792" height="1792">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z " />
        </Svg>
        <span className="sr-only">Show previous image</span>
      </Button>

      <Button type="button" variant="transparent" onClick={handleNext}>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="1792" height="1792">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z " />
        </Svg>
        <span className="sr-only">Show next image</span>
      </Button>
    </div>
  );
}

export default Carousel;
