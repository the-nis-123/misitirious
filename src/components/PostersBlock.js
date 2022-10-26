import styled from 'styled-components';
import Carousel from './Carousel';

const PostersBlock = () => {
  return (
    <Wrapper >
      <h2>Spend less while getting all your favorites with convinience</h2>
      <Carousel />
    </Wrapper>
  )
}

export default PostersBlock;


const Wrapper = styled.div`
  grid-area: poster;
  padding: 20px;
  width: 100%;
  height: 450px;
  overflow: hidden;
  background-color: var(--primary-color, #f2f2f2);
`
