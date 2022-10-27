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
    <CaptionWrapper>
      <SideBarIcons>
        <a href='https://github.com/the-nis-123' target="_blank" rel="noopener noreferrer">{ IconWithStyles(FacebookWithCircle) }</a>
        <a href='https://twitter.com/niscloud_kintu' target="_blank" rel="noopener noreferrer">{ IconWithStyles(TwitterWithCircle) }</a>
        <a href='https://github.com/the-nis-123' target="_blank" rel="noopener noreferrer">{ IconWithStyles(InstagramWithCircle) }</a>
        <a href='https://www.linkedin.com/in/kintu-denis/' target="_blank" rel="noopener noreferrer">{ IconWithStyles(LinkedinWithCircle) }</a>
      </SideBarIcons>

      <Caption>
        <LeftCaption>
          <h4>UNMATCHED QUALITY</h4>
          <h1>Elegant, Slick,<br /> and Trending</h1>
          <p> at prices you can trust</p>
          <p>upto <span>15%</span> less <br/> than your average stores</p>
        </LeftCaption>

        <RightCaption>
          <p>Watches</p>
          <p>Shooes</p>
          <p>All year round Fashion Events</p>
          <p>Safe, Reliable and Quick Delivery </p>
          <p>High End Jewellery</p>
          <p>Body Products(Fragrance, Cosmetics)</p>
          <p>Custom Orders, Just Say It</p>
          <p>Safe, Reliable and Quick Delivery </p>
          <p>High End Jewellery</p>
          <p>Custom Orders, Just Say It</p>
        </RightCaption>
      </Caption>
    </CaptionWrapper>
    <Image style={{backgroundImage:`url('${image}')`}} />
  </Slider>
  )
}

export default HeroSlider;


const Slider = styled.div`
  grid-area: hero;
  background-color: #FDFDFD;
  display:flex;
  height: 80vh;
  width: 100%;
  position: relative;
`

const Image = styled.div`
  height: 100%;
  width: 100%;
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
`

const CaptionWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  top: 0;
`


const Caption = styled.div`
  height: 100%;
  width: calc(100% - 60px);
  display: flex;
  justify-content: space-between;
`


const LeftCaption = styled.div`
  height: 100%;
  width: 600px;
  padding: 50px 50px 0 50px;

  h1, span{
    font-size: 4rem;
    margin:10px 0;
    font-family: 'Lobster Two';
  }

  span{
    color: red;
  }
`


const RightCaption = styled.div`
  height: 100%;
  width: 400px;
  padding: 70px 20px;


  p{
    text-align: right;
    padding: 2px 10px;
    border-right: 4px red solid;
  }
`