import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoryCard = ({image, name}) => {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <Image src={image} alt='' />
      <Link to='/store'>Shop Now</Link>
    </Wrapper>
  )
}

export default CategoryCard;

const Wrapper = styled.div`
  min-width: 280px;
  display: inline-flex;
  flex-flow:column;
  justify-content: space-between;
  background-color: white;
  padding: 1em 2em;

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

const Image = styled.img`
  width: 100%;
  height: 75%;
  object-fit: cover;
`