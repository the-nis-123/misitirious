import styled from 'styled-components';
import FiveStarRating from './FiveStarRating';
import { addToCart } from '../../redux/features/cartSlice';
import { useDispatch } from 'react-redux';

const ProductInfo = ({data}) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = (e) => {
    console.log(data);
    e.stopPropagation();
    dispatch(addToCart({...data, count:1}));
  };

  return (
    <Wrapper>
      <Image style={{backgroundImage:`url(${data?.image? data.image : ''})`}}/>
      <Info>
        <h2>{data?.name? data.name : ''}</h2>
        <p>${data?.price? data.price : ''}</p>
        <FiveStarRating />
        <p>
          W3Schools is optimized for learning, testing, and training.
          Examples might be simplified to improve reading and basic understanding.
          Tutorials, references, and examples are constantly reviewed to avoid errors, 
          While using this site, you agree to have read and accepted our 
          reading and basic understanding. Tutorials, references, and examples 
          are constantly reviewed to avoid errors, but we cannot warrant full 
          read and accepted our terms of use, cookie and privacy policy.
        </p>

        <span className='button' onClick={handleAddToCart}>Add to Cart</span>
      </Info>
    </Wrapper>
  )
}

export default ProductInfo;


const Wrapper = styled.div`
  padding: 1em;
  background-color:#f8f8f8;

  @media only screen and (min-width: 640px)  {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-width: 40em;
  }

  p{
    margin-top: 10px;
  }
`

const Image = styled.div`
  max-width: 100%;
  min-height: 40vh;
  background-color:inherit;
  background-size:contain;
  background-position: center;
  background-repeat:no-repeat;
`


const Info = styled.div`
  padding: 1em 0;

  h2{
    text-transform: capitalize;
  }

  .button{
    display: block;
    margin: 15px auto 0 auto;
    background-color: black;
    color: white;
    border-radius: 2em;
    padding: 0.8em 2em;
    text-align: center;
    width: 90%;
    
    :hover{
      cursor:pointer
    }
  }
`
