import styled from "styled-components";
import image from '../images/3.png';
import SideBarIcons from "./HeroSocialIcons";
import { servicesList } from "../other resources/site-identity";

const HeroSlider = () => {
  return (
  <Slider style={{backgroundImage:`url('${image}')`}}>
    <CaptionWrapper>
      {/* <SideBarIcons /> */}

      <Caption>
        <LeftCaption>
          <h4>UNMATCHED QUALITY</h4>
          <h1>Elegant, Slick,<br /> and Trending</h1>
          <p> at prices you can trust</p>
          <p>upto <span>15%</span> less <br/> than your average stores</p>
        </LeftCaption>

        <RightCaption className='hide-on-small-screens'>
          <For each='item' of={servicesList}>
            <p key={servicesList.indexOf(item)}> {item} </p>
          </For>
        </RightCaption>
      </Caption>
    </CaptionWrapper>
  </Slider>
  )
}

export default HeroSlider;


const Slider = styled.div`
  background-color: #fdfdfd;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  max-width: 100vh !important; 
  text-align: center;
`

const CaptionWrapper = styled.div`
  height: 100%;
  width: 100%;
`

const Caption = styled.div`
  justify-content: space-between;
`

const LeftCaption = styled.div`
  padding: 50px 50px 0 50px;
  text-align: center;

  h1, span{
    font-size: 4rem;
    margin:10px 0;
    font-family: 'Lobster Two';
  }

  span{
    color: var(--primary-color);
  }
`

const RightCaption = styled.div`
  padding: 70px 20px;

  p{
    text-align: right;
    padding: 2px 10px;
    border-right: 4px solid var(--primary-color);
  }
`