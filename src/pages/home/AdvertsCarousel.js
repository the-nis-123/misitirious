import styled from 'styled-components';
import Carousel from '../../components/Carousel';

const AdvertsCarousel = ({data}) => {
  return (
    <Wrapper >
      <h3>Popular brands</h3>
      <Carousel slideWidth='600px'  data={data}/>
    </Wrapper>
  )
}

export default AdvertsCarousel;


const Wrapper = styled.div`
  padding: 1em 0;
  overflow: hidden;

  h3{
    padding: 0 0.6em;
  }
`
