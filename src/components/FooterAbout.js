import styled from 'styled-components';
import { Link } from 'react-router-dom';


const FooterAbout = ({children}) => {
  return (
    <Wrapper>{ children }</Wrapper>
  )
}

export default FooterAbout;

const Wrapper = styled.section`
  background-color: inherit;
  p{
    padding: 7px 0;
  }

  h3{
    color: red;
  }

   @media screen and (max-width: 600px) {
    margin: 0 auto;
    text-align:center;
  }
`