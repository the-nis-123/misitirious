import styled from 'styled-components';


const FooterAbout = () => {
  return (
  <Wrapper>
    <h3>PRODUCTS AND SERVICES</h3>
    <p>About us</p>
    <p>Contact us</p>
    <p>Our Partners</p>
    <p>Career Opportunities</p>
    <p>Frequently asked quetions</p>
    <p>About us</p>
    <p>Contact us</p>
    <p>Our Partners</p>
  </Wrapper>
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