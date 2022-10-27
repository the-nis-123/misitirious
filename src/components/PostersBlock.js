import styled from 'styled-components';
import Carousel from './Carousel';

const PostersBlock = () => {
  return (
    <Wrapper >
      <h3>Popular brands</h3>
      <Carousel slideWidth='600px' />
    </Wrapper>
  )
}

export default PostersBlock;


const Wrapper = styled.div`
  grid-area: poster;
  padding: 20px 0;
  width: 100%;
  height: 450px;
  overflow: hidden;

  h3{
    padding: 0 20px;
  }
`
