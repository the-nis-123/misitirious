import styled from 'styled-components';

import image7 from '../images/14.png';
import image8 from '../images/4.png';
import image15 from '../images/233.png';

const PostersBlock = () => {
  return (
    <Wrapper >
      <h2>Spend less while getting all your favorites with convinience</h2>
      <Poster>
        <section style={{ backgroundImage: `url(${image7})` }} />
        <section style={{ backgroundImage: `url(${image15})` }} />
        <section  style={{ backgroundImage: `url(${image8})` }}/>
      </Poster>
    </Wrapper>
  )
}

export default PostersBlock;


const Wrapper = styled.div`
  grid-area: poster;
  padding: 20px;
  background-color: white;
`

const Poster = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: inherit;
  height: 300px;  
  padding: 10px 0;

  section{
    height:100%;
    background-position: center;
    background-size: contain;
    background-repeat:no-repeat;
  }
`