import styled from "styled-components";
import FooterAbout from "./FooterAbout";
import FooterSubscribe from "./FooterSubscribe";

const FooterBlock = () => {
  return (
    <Wrapper>
      <Section>
        <FooterSubscribe />

        <FooterAbout>
          <h3>PRODUCTS AND SERVICES</h3>
          <p>About us</p>
          <p>Contact us</p>
          <p>Our Partners</p>
          <p>Career Opportunities</p>
          <p>Frequently asked quetions</p>
          <p>About us</p>
          <p>Contact us</p>
          <p>Our Partners</p>
        </FooterAbout>

        <FooterAbout>
          <h3>EVENTS</h3>
          <p>About us</p>
          <p>Contact us</p>
          <p>Our Partners</p>
          <p>Career Opportunities</p>
          <p>Frequently asked quetions</p>
        </FooterAbout>

        <FooterAbout>
          <h3>COMPANY</h3>
          <p>About us</p>
          <p>Contact us</p>
          <p>Our Partners</p>
          <p>Career Opportunities</p>
          <p>Frequently asked quetions</p>
          <p>About us</p>
          <p>Contact us</p>
          <p>Our Partners</p>
          <p>Career Opportunities</p>
          <p>Frequently asked quetions</p>
        </FooterAbout>
      </Section>
      
      <LowerSection>
        <section>
          <span>@2022 Misitirious Inc.   </span>
          <span>All rights reserved.</span>
        </section>

        <section>
          <span>Service Status | </span>
          <span>Legal | </span>
          <span>Privacy</span>
        </section>
      </LowerSection>
    </Wrapper>
  )
}

export default FooterBlock;


const Wrapper = styled.footer`
  background-color: #c8c8c8;
  padding: 0 30px;
`

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 20px;
  padding: 40px 0;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const LowerSection = styled.section`
  border-top: solid 1px grey;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

   @media screen and (max-width: 600px) {
   flex-flow:column;
  }
`

