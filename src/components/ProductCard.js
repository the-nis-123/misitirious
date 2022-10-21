import styled from "styled-components";
import { CartAdd } from '@styled-icons/boxicons-solid/CartAdd';
import { Heart } from '@styled-icons/feather/Heart';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({image, name, price, id}) => {
  const navigate = useNavigate();

  const navigateToProductDetails = () => {
    navigate(`/store/${id}`);
  };

  const addToCart = (e) => {
    e.stopPropagation();
  };

  const addToWishlist = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <If condition={price !== undefined && name !== undefined}>
        <Wrapper onClick={navigateToProductDetails}>
          <FlexContainer>
            <p>{ name }</p> 
            <Heart size='20px' onClick={addToWishlist} />
          </FlexContainer>

          <Image style={{ backgroundImage: `url(${image})` }} />

          <Description>
              Some kind of description about this particular product 
              and all that other relevant information that customers might be interested in.
          </Description>

          <FlexContainer>
            <BuyIcon onClick={addToCart} >
              <CartAdd size='30px'/>
            </BuyIcon>

            <Price>$293.99</Price>
          </FlexContainer>
        </Wrapper>
      </If>
        
      <If condition={price === undefined || name === undefined}>
        <PosterWrapper>
          <PostImage  style={{ backgroundImage: `url(${image})` }} />
        </PosterWrapper>
      </If>
    </>
  )
}

export default ProductCard;

const Wrapper = styled.div`
  margin-top: 20px;
  vertical-align: middle;
  position: relative;
  width: auto;
  height: 320px;
  border-radius: 5px;
  background-color:  #F8F8F8;
  padding: 0 20px;

  :hover{
    cursor:pointer;
  }
 
`
const PosterWrapper = styled(Wrapper)`
  height: 320px;
`

const Image = styled.div`
  height: 40%;
  width: 100%;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: contain;
  background-position: center;
`

const PostImage = styled(Image)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position:  center;
  position: absolute;
  bottom: 0;
  right: 0;
`

const Price = styled.p`
  font-weight: bold;
  font-size: 1.3em;
`


const Description = styled.p`
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
line-clamp: 3; 
color:grey;
`
const FlexContainer = styled.div`
 display:flex;
 justify-content: space-between;
 align-items:center;
 padding: 20px 0;

 p{
  text-transform: capitalize;
  verflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
 }

 svg{
    :hover{
      cursor:pointer;
      color: red;
    }
 }
`

const BuyIcon = styled.div`
  background-color: #f0f0f0;
  width:50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  svg{
    color: #9d6262;
  }

  :hover{
    cursor:pointer;
    svg{
      color: red;
    }
  }
`