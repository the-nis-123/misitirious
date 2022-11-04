import styled from 'styled-components';
import Carousel from '../../components/carousel/Carousel';
import Slide from '../../components/Slides';

import { useGetGalleryQuery } from '../../redux/misitiriousApi';


const AdvertsCarousel = () => {

  const { data: gallery } = useGetGalleryQuery();
  const brands = gallery?.brands;

  return (
    <Wrapper >
      <h2>Popular Brands</h2>
      
      <Carousel show={4} infiniteLoop auto={true}>
        <If condition={brands}>
          <For each='slide' of={brands}>
            <Slide key={slide}>
              <img src={slide}  alt=''/>
            </Slide>
          </For>
        </If>
      </Carousel>
    </Wrapper>
  )
}

export default AdvertsCarousel;


const Wrapper = styled.div`
  padding: 1em 0;
  overflow: hidden;

  h2{
    padding: 0 0.6em;
  }
`
