import styled from 'styled-components';

import image10 from '../images/116.png';
import image22 from '../images/27.png';


const AdSection = () => {
  return (
    <Wrapper>
      <h2> From our partners</h2>
      <Section>
        <section style={{ backgroundImage: `url(${image10})` }} />
        <section  style={{ backgroundImage: `url(${image22})` }}/>
      </Section>  
    </Wrapper>
  )
}

export default AdSection;


const Wrapper = styled.div`
  grid-area: adSection;
  padding: 20px;
  background-color: white;
`

const Section = styled.div`
  height: 300px;  
  background-color: inherit;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px 0;

  section{
    height:100%;
    background-position: center;
    background-size: contain;
    background-repeat:no-repeat;
  }

`