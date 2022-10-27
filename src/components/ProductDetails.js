import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../redux/misitiriousApi';
import FiveStarRating from './FiveStarRating';

const ProductDetails = () => {
  const {id} = useParams();
  const data = useGetProductByIdQuery(id);

  return (
    <ProductInfo>
      <Image style={{backgroundImage:`url(${data?.data? data.data[0].image : ''})`}}/>
      <Info>
        <h2>{data?.data? data.data[0].name : ''}</h2>
        <FiveStarRating />
        <p>
          W3Schools is optimized for learning, testing, and training.
          Examples might be simplified to improve reading and basic understanding.
          Tutorials, references, and examples are constantly reviewed to avoid errors, 
          but we cannot warrant full correctness of all content. 
          While using this site, you agree to have read and accepted our 
          terms of use, cookie and Examples might be simplified to improve 
          reading and basic understanding. Tutorials, references, and examples 
          are constantly reviewed to avoid errors, but we cannot warrant full 
          correctness of all content. While using this site, you agree to have 
          read and accepted our terms of use, cookie and privacy policy.
        </p>

        <Buttons>
          <span>Add to Cart</span>
          <span>Wishlist</span>
          <span>Save</span>
        </Buttons>
      </Info>
    </ProductInfo>
  )
}

export default ProductDetails;


const ProductInfo = styled.div`
  grid-area: product;
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 20px;
  background-color:#f8f8f8;

  p{
    margin-top: 10px;
  }
`

const Image = styled.div`
  width: 550px;
  height: 450px;
  background-color:inherit;
  background-size:contain;
  background-position: center;
  background-repeat:no-repeat;
`


const Info = styled.div`
  width: calc(100% - 550px);
  height: 450px;

  h2{
    text-transform: capitalize;
  }
`

const Buttons = styled.section`
  white-space: nowrap;
  padding: 10px 0;
  span{
    display: inline-block;
    margin-right: 15px;
    background-color: black;
    color: white;
    border-radius: 20px;
    padding: 5px 15px;
  }
`
