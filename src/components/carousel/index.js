import CarouselsWrapper from "./Carousel"
import styled from "styled-components";
import { useGetGalleryQuery } from "../../redux/misitiriousApi";

const Carousel = ({children, slideWidth}) => {
  const { data: gallery } = useGetGalleryQuery();
  const data = gallery?.trends;

    return (
    <>
      <If condition={children}>
        <CarouselsWrapper show={4} infiniteLoop >
          {children}
        </CarouselsWrapper>
      </If>

      <If condition={!children}>
        <CarouselsWrapper show={4} infiniteLoop auto={true}>
          <If condition={data}>
            <For each='slide' of={data}>
              <Slide 
                key={slide} slideWidth={slideWidth} 
                className='slide'
              >
                <img src={slide}  alt=''/>
              </Slide>
            </For>
          </If>
        </CarouselsWrapper>
      </If>
    </>
    )
}

export default Carousel;

const Slide = styled.div`
  height: 400px;
  background-color: white;
  min-width: 300px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
`
