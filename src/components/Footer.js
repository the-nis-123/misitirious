import styled from "styled-components";
import FooterAbout from "./FooterSection";
import FooterSubscribe from "./FooterSubscribe";

const FooterBlock = () => {
  return (
    <Wrapper>
      <Section>
        <FooterSubscribe />

        <FooterAbout />
        <FooterAbout />
        <FooterAbout />
      </Section>
          
      <LowerSection>
        <section>
          <span>&copy;{new Date().getFullYear()} Misitirious Inc.   </span>
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

