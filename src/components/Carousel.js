import styled from 'styled-components';
import { useState } from 'react';
import {useGetGalleryQuery} from '../redux/misitiriousApi';

const Carousel = ({slideWidth}) => {
  const data = useGetGalleryQuery();

  return (
    <Wrapper >
      <Slides>
        <If condition={data?.data}>
          <For each='slide' of={data.data}>
            <Slide slideWidth={slideWidth}>
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
  height: 100%;
  position: relative;
  margin-top: 10px;
`


const Slides = styled.div`
  height: 100%;
  display:inline-flex;
  flex-wrap: nowrap;
  gap:20px;
  overflow: hidden;
  padding: 0 20px;
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
