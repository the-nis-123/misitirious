import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .carousel-content > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }

  .carousel-content.show-2 > * {
    width: 50%;
  }

  .carousel-content.show-3 > * {
    width: calc(100% / 3);
  }

  .carousel-content.show-4 > * {
    width: calc(100% / 4);
  }

  .left-arrow, .right-arrow {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-color: white;
    border: 1px solid #ddd;

    :hover{
      cursor: pointer;
    }
  }

  .left-arrow {
    left: 24px;
  }

  .right-arrow {
    right: 24px;
  }

  @media (hover: none) and (pointer: coarse) {
    .left-arrow, .right-arrow {
        display: none;
    }
  }
`

const CarouselWrapper  = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding: 0 0.6em;
`

const CcarouselContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;

`

const CarouselContent = styled.div`
  display: flex;
  column-gap: 1em;
  transition: all 250ms linear;
  -ms-overflow-style: none;  
  scrollbar-width: none;  
  padding: 1em 0;
`


export {CarouselContainer, CarouselContent, CcarouselContentWrapper, CarouselWrapper}