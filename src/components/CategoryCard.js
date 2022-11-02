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
  flex: 25%;
  display:flex;
  flex-flow:column;
  background-color: white;
  padding: 10px 30px;
  height: auto;

  a{
    text-decoration:none;
    color:blue;
  }

  h3,a{
    padding: 10px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-clamp: 2; 
  }
`

const Image = styled.div`
  width: 100%;
  min-height: 7em;
  background-color:pink;
  background-size: cover;
  background-repeat: no-repeat;
  background-position:center;
`