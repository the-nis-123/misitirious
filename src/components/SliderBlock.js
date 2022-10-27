import styled from 'styled-components';

import Carousel from './Carousel';


const SliderBlock = () => {
  return (
    <Wrapper>
      <h3> From our partners</h3>
      <Carousel />
    </Wrapper>
  )
}

export default SliderBlock;


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
