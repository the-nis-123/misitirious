import styled from 'styled-components';

import Carousel from '../../components/carousel/Carousel';
import Slide from '../../components/Slides';
import { useGetGalleryQuery } from '../../redux/misitiriousApi';


const GallerySlide = () => {

  const { data: gallery } = useGetGalleryQuery();
  const trends = gallery?.trends;

  return (
    <Wrapper>
      <h2> Fashion Trends of the Week</h2>
      
      <Carousel show={4} infiniteLoop auto={true}>
        <If condition={trends}>
          <For each='slide' of={trends}>
            <Slide key={slide}>
              <img src={slide}  alt=''/>
            </Slide>
          </For>
        </If>
      </Carousel>
    </Wrapper>
  )
}

export default GallerySlide;


const Wrapper = styled.div`
  padding: 0.6em 0;
  width: 100%;
  overflow: hidden;
  
  h2{
    padding: 0 0.6em;
  }
`
