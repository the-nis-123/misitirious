import styled from "styled-components";
import image from '../images/127.png';
import SideBarIcons from "./HeroSocialIcons";
import IconWithStyles from "./IconWithStyles";

import { TwitterWithCircle } from '@styled-icons/entypo-social/TwitterWithCircle';
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import { FacebookWithCircle } from '@styled-icons/entypo-social/FacebookWithCircle';

const HeroSlider = () => {
  return (
  <Slider>
    <SideBarIcons>
      <a href='https://github.com/the-nis-123' target="_blank" rel="noopener noreferrer">{ IconWithStyles(FacebookWithCircle) }</a>
      <a href='https://twitter.com/niscloud_kintu' target="_blank" rel="noopener noreferrer">{ IconWithStyles(TwitterWithCircle) }</a>
      <a href='https://github.com/the-nis-123' target="_blank" rel="noopener noreferrer">{ IconWithStyles(InstagramWithCircle) }</a>
      <a href='https://www.linkedin.com/in/kintu-denis/' target="_blank" rel="noopener noreferrer">{ IconWithStyles(LinkedinWithCircle) }</a>
    </SideBarIcons>

    <Hero>
      <Image src={image} alt='' />
    </Hero>
  </Slider>
  )
}

export default HeroSlider;


const Slider = styled.div`
 grid-area: hero;
 background-color: inherit;
 display:flex;
 padding: 0 30px;
 
  @media screen and (max-width: 960px) {
    width: 100vw;
  }
`


const Image = styled.img`
  height: 100%;
  width: auto;

  
  @media screen and (max-width: 960px) {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`

const Hero = styled.div`
  height: 60vh;
  background-color: inherit;

  @media screen and (max-width: 960px) {
    height: 100%;
    width: 100%;
  }
`