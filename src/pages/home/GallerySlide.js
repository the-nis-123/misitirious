import styled from 'styled-components';

import Carousel from '../../components/Carousel';


const GallerySlide = ({data}) => {
  return (
    <Wrapper>
      <h2> Fashion Trends of the Week</h2>
      <Carousel data={data}/>
    </Wrapper>
  )
}

export default GallerySlide;


const Wrapper = styled.div`
  padding: 0.6em 0;
  width: 100%;
  height: 450px;
  overflow: hidden;
  
  h2{
    padding: 0 0.6em;
  }
`
