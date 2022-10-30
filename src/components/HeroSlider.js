import styled from "styled-components";
import image from '../images/3.png';
import SideBarIcons from "./HeroSocialIcons";
import { servicesList } from "../other resources/site-identity";

const HeroSlider = () => {
  return (
  <Slider style={{backgroundImage:`url('${image}')`}}>
    <CaptionWrapper>
      <SideBarIcons />

      <Caption>
        <LeftCaption>
          <h4>UNMATCHED QUALITY</h4>
          <h1>Elegant, Slick,<br /> and Trending</h1>
          <p> at prices you can trust</p>
          <p>upto <span>15%</span> less <br/> than your average stores</p>
        </LeftCaption>

        <RightCaption>
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
  display:flex;
  align-items: center;
  height: 80vh;
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
`

const CaptionWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`

const Caption = styled.div`
  width: calc(100% - 60px);
  display: flex;
  justify-content: space-between;
`

const LeftCaption = styled.div`
  padding: 50px 50px 0 50px;

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