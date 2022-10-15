import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoryCard = ({image, name}) => {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <Image style={{ backgroundImage: `url(${image})` }}/>
      <Link to='/store'>Shop Now</Link>
    </Wrapper>
  )
}

export default CategoryCard;

const Wrapper = styled.div`
  height: 400px;
  display:flex;
  flex-flow:column;
  background-color: white;
  padding: 10px 30px;

  a{
    text-decoration:none;
    color:blue;
  }
  h3,a{
    padding: 10px 0;
  }
`

const Image = styled.div`
  width: 100%;
  height: 300px;
 background-color:pink;
 background-size: cover;
 background-repeat: no-repeat;
 background-position:center;
`