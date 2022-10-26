import styled from 'styled-components';

import image10 from '../images/116.png';
import image22 from '../images/27.png';
import Carousel from './Carousel';


const AdSection = () => {
  return (
    <Wrapper>
      <h2> From our partners</h2>
      <Carousel />
    </Wrapper>
  )
}

export default AdSection;


const Wrapper = styled.div`
  grid-area: adSection;
  padding: 20px;
  width: 100%;
  height: 450px;
  overflow: hidden;
  background-color: var(--primary-color, #f2f2f2);
`
