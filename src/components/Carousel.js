import styled from 'styled-components';
import { useRef } from 'react';

const Carousel = ({slideWidth, data}) => {
  const slidesRef = useRef([]);

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

      </Slides>
    </Wrapper>
  )
}

export default Carousel;

const Wrapper = styled.div`
  max-width: 100vw;
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
  padding: 0 10px;
`
const Slide = styled.div`
  height: 100%;
  width:  ${props => props.slideWidth ? props.slideWidth : '300px'};
  background-color: white;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
