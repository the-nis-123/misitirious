import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../redux/misitiriousApi';

const ProductDetaials = () => {
  const {id} = useParams();
  const data = useGetProductByIdQuery(id);
  data?.data && console.log(data.data[0]);

  return (
    <ProductInfo>
      <Image style={{backgroundImage:`url(${data?.data? data.data[0].image : ''})`}}/>
      <Info>
        <h3>Product name given in full right here</h3>
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
      </Info>
    </ProductInfo>
  )
}

export default ProductDetaials;


const ProductInfo = styled.div`
  grid-area: product;
  display: flex;
  align-items: center;
  padding: 50px 20px;
  margin: 20px;
  background-color:#f8f8f8;
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
`
