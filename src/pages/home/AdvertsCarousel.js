import styled from 'styled-components';
import Carousel from '../../components/carousel';

const AdvertsCarousel = ({data}) => {
  return (
    <Wrapper >
      <h2>Popular Brands</h2>
      <Carousel slideWidth='600px'  data={data}/>
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
