import styled from "styled-components";
import image from '../../images/6.png';
import SideBarIcons from "./HeroSocialIcons";
import { servicesList } from "../../other resources/site-identity";

const HeroSlider = () => {
  return (
  <Slider style={{backgroundImage:`url('${image}')`}}>
    <SideBarIcons />

    <Caption>
      <LeftCaption>
        <h3>UNMATCHED QUALITY</h3>
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
  </Slider>
  )
}

export default HeroSlider;


const Slider = styled.div`
  background-color: #fdfdfd;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 60vh;

  @media only screen and (min-width: 640px)  {
    display: flex;
    align-items: center;
    min-height: 60vh;
    padding: 2em;
  }

  @media only screen and (min-width: 1000px)  {
    min-height: 80vh;
  }
`

const Caption = styled.div`
  display: none;
  padding: 2rem;

  @media only screen and (min-width: 1000px)  {
    width: calc(100% - 4em);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const LeftCaption = styled.div`
  h1, span{
    font-size: 4rem;
    font-family: 'Lobster Two';
  }

  span{
    color: var(--primary-color);
  }

  h3{
    color: purple;
    padding: 1em 0;
  }
`

const RightCaption = styled.div`

  p{
    text-align: right;
    padding: 0.2em 0.6em;
    border-right: 4px solid var(--primary-color);
  }
`