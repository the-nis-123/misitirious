import styled from 'styled-components';
import {useGetGalleryQuery} from '../redux/misitiriousApi';
import { useRef } from 'react';

const Carousel = ({slideWidth, data}) => {
  const slidesRef = useRef([]);

  const carousels = document.querySelectorAll('.slides');
  const prevBtn = document.querySelectorAll('.left');
  const nextBtn = document.querySelectorAll('.right');
  let carsouselImages = document.querySelectorAll('.slides div');

  //Next Carousel
  carousels.forEach((carousel, index)=>{
    
  const nextCarousel = () => {
      if(carsouselImages[carsouselImages.length - 1]) {
        carousel.scrollTo(0, 0); 
      } 
        carousel.scrollBy(300, 0);
  };

  nextBtn[index].addEventListener('click', e => {
    nextCarousel(); 
  });

  //Prev Carousel
  const prevCarousel = () => {
    if(carsouselImages[0]) {
      carousel.scrollTo(4800,0);
    }
      carousel.scrollBy(-300, 0); 
  };

  prevBtn[index].addEventListener('click', e => {
    prevCarousel(); 
  });


  // Auto carousel
  const auto = true; // Auto scroll
  const intervalTime = 5000;
  let sliderInterval;


  if (auto) {
    sliderInterval = setInterval(nextCarousel, intervalTime);
  };

  carousel.addEventListener('mouseover', (stopInterval) => {
    clearInterval(sliderInterval);
  });

  carousel.addEventListener('mouseleave', (startInterval) => {
    if (auto) {
      sliderInterval = setInterval(nextCarousel, intervalTime);
    }
  }); 

  //for mobile events
  carousel.addEventListener('touchstart', (stopIntervalT) => {
      clearInterval(sliderInterval);
  });
  carousel.addEventListener('touchend', (startIntervalT) => {
    if (auto) {
      sliderInterval = setInterval(nextCarousel, intervalTime);
    }
  });

//Debounce
var previousCall;
window.addEventListener('resize', () => {
    if (previousCall >= 0) {
        clearTimeout(previousCall);
    } 
    
}); 
});

  return (
    <Wrapper >
      <Slides>
        <If condition={data}>
          <For each='slide' of={data}>
            <Slide 
              key={slide} slideWidth={slideWidth} 
              className='slide'>
              <img src={slide}  alt=''/>
            </Slide>
          </For>
        </If>

        <span className='carousel-buttons left'/>
        <span className='carousel-buttons right'/>
      </Slides>
    </Wrapper>
  )
}

export default Carousel;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  overflow: hidden;
`
const Slides = styled.div`
  height: 100%;
  display:inline-flex;
  flex-wrap: nowrap;
  gap:20px;
  transform-style: preserve-3d;
  padding: 0 20px;
  position: relative;

  .carousel-buttons{
    display:block;
    width: 60px;
    height: 60px;
    background-color: red;
    position: absolute;
  }

  .left{
    left:0;
  }

  .right{
    bottom:0;
  }
`
const Slide = styled.div`
  height: 90%;
  width:  ${props => props.slideWidth ? props.slideWidth : '300px'};
  background-color: white;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
