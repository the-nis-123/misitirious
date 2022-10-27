import styled from "styled-components";
import image from '../images/3.png';
import SideBarIcons from "./HeroSocialIcons";
import IconWithStyles from "./IconWithStyles";

import { TwitterWithCircle } from '@styled-icons/entypo-social/TwitterWithCircle';
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import { FacebookWithCircle } from '@styled-icons/entypo-social/FacebookWithCircle';

const HeroSlider = () => {
  return (
  <Slider>
    {/* <SideBarIcons>
      <a href='https://github.com/the-nis-123' target="_blank" rel="noopener noreferrer">{ IconWithStyles(FacebookWithCircle) }</a>
      <a href='https://twitter.com/niscloud_kintu' target="_blank" rel="noopener noreferrer">{ IconWithStyles(TwitterWithCircle) }</a>
      <a href='https://github.com/the-nis-123' target="_blank" rel="noopener noreferrer">{ IconWithStyles(InstagramWithCircle) }</a>
      <a href='https://www.linkedin.com/in/kintu-denis/' target="_blank" rel="noopener noreferrer">{ IconWithStyles(LinkedinWithCircle) }</a>
    </SideBarIcons> */}

    <Hero>
      {/* <Caption></Caption> */}
      <Image style={{backgroundImage:`url('${image}')`}} />
    </Hero>
  </Slider>
  )
}

export default HeroSlider;


const Slider = styled.div`
 grid-area: hero;
 background-color: #FDFDFD;
 display:flex;
 width: 100%;
`

const Image = styled.div`
  height: 100%;
  width: 100%;
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
`

const Hero = styled.div`
  height: 80vh;
  width: 100%;
`



const Caption = styled.div`
  height: 100%;
  width: 30%;
`