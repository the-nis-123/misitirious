import styled from 'styled-components';

const Carousel = () => {
  return (
    <Wrapper>
      <For each='slide' of={[1,2,3,4,5,6]}>
        <Slide>{slide}</Slide>
      </For>
    </Wrapper>
  )
}

export default Carousel;

const Wrapper = styled.div`
  height: 100%;
  display:inline-flex;
  flex-wrap: nowrap;
  gap: 20px;
  padding: 20px 0;
  overflow: hidden;
`

const Slide = styled.div`
  height: 100%;
  width: 300px;
  background-color: white;
`