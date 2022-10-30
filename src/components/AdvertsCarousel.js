import styled from 'styled-components';
import Carousel from './Carousel';

const AdvertsCarousel = () => {
  return (
    <Wrapper >
      <h3>Popular brands</h3>
      <Carousel slideWidth='600px' />
    </Wrapper>
  )
}

export default AdvertsCarousel;


const Wrapper = styled.div`
  padding: 20px 0;
  overflow: hidden;

  h3{
    padding: 0 20px;
  }
`
