import styled from 'styled-components';
import { useState } from 'react';
import {CaretLeft} from '@styled-icons/open-iconic/CaretLeft';
import {CaretRight} from '@styled-icons/open-iconic/CaretRight';

const Carousel = () => {
  const [showButtons, setShowButtons] = useState(false);
  return (
    <Wrapper 
      onMouseEnter={()=>setShowButtons(true)}
      onMouseLeave={()=>setShowButtons(false)}
    >
      <Left style={{visibility: showButtons? 'visible' : 'hidden'}}>
        <CaretLeft size='30px' />
      </Left>

      <Right style={{visibility: showButtons? 'visible' : 'hidden'}}>
        <CaretRight size='30px'/>
      </Right>

      <Slides>
        <For each='slide' of={[1,2,3,4,5,6]}>
          <Slide>{slide}</Slide>
        </For>
      </Slides>
    </Wrapper>
  )
}

export default Carousel;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  margin-top: 10px;
`


const Slides = styled.div`
  height: 100%;
  display:inline-flex;
  flex-wrap: nowrap;
  gap:20px;
  overflow: hidden;
  padding: 0 20px;
`

const Slide = styled.div`
  height: 90%;
  width: 300px;
  background-color: white;
`

const Left = styled.div`
  height: 90%;
  width: 70px;
  background-color: rgba(0,0,0, 0.2);
  position: absolute;
  left:0;
  z-index:1;
  display: grid;
  place-items:center;
  color: 	#505050;
  
  :hover{
    cursor:pointer;
  }
`
const Right = styled.div`
  height: 90%;
  width: 70px;
  background-color: rgba(0,0,0, 0.2);
  position: absolute;
  right:0;
  z-index:1;
  display:grid;
  place-items:center;
  color: 	#505050;

  :hover{
    cursor:pointer;
  }
`