import styled from "styled-components";
import { CartAdd } from '@styled-icons/boxicons-solid/CartAdd';
import { Favorite } from '@styled-icons/material-rounded/Favorite';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../redux/features/cartSlice';
import { addToWishlist } from '../redux/features/productSlice';


const ProductCard = ({image, name, price, id}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {isInCart, isInWishList} = useSelector((state) => state.cart);

  const navigateToProductDetails = () => {
    navigate(`/store/${id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart({id,image, name, price, count:1}));
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    dispatch(addToWishlist({id}));
  };

  return (
    <>
      <If condition={price !== undefined && name !== undefined}>
        <Wrapper onClick={navigateToProductDetails}>
          <FlexContainer>
            <p>{ name }</p> 
            <Favorite size='20px' onClick={handleAddToWishlist} />
          </FlexContainer>

          <Image style={{ backgroundImage: `url(${image})` }} />

          <Description>
              Some kind of description about this particular product 
              and all that other relevant information that customers might be interested in.
          </Description>

          <FlexContainer>
            <BuyIcon onClick={handleAddToCart} >
              <CartAdd size='30px'/>
            </BuyIcon>

            <Price>${price}</Price>
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
  font-family: 'Noto Sans Vai', sans-serif;

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
`


const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3; 
  font-size: 0.8rem;
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