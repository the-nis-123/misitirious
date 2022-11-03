import styled from 'styled-components';

import Carousel from '../../components/Carousel';


const GallerySlide = ({data}) => {
  return (
    <Wrapper>
      <h3> Trends right now</h3>
      <Carousel data={data}/>
    </Wrapper>
  )
}

export default GallerySlide;


const Wrapper = styled.div`
  grid-area: adSection;
  padding: 20px 0;
  width: 100%;
  height: 450px;
  overflow: hidden;
  
  h3{
    padding: 0 20px;
  }
`
