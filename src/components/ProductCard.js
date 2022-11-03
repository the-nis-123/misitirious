import styled from "styled-components";
import { CartAdd } from '@styled-icons/boxicons-solid/CartAdd';
import { Favorite } from '@styled-icons/material-rounded/Favorite';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../redux/features/cartSlice';
import { showProductDetails } from '../redux/features/productSlice';


const ProductCard = ({image, name, price, id, category}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {isInCart, isInWishList} = useSelector((state) => state.cart);

  const navigateToProductDetails = (e) => {
    e.stopPropagation();
    dispatch(showProductDetails({image, name, price, id, category}));
    navigate('/product-details');
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart({id,image, name, price, count:1}));
  };


  return (
    <If condition={price !== undefined && name !== undefined}>
      <Wrapper onClick={navigateToProductDetails}>
        <FlexContainer>
          <p className="product-name">{ name }</p> 
          <Favorite  size='1rem' />
        </FlexContainer>

        <Image src={image} alt='' />

        <Description>
          Some kind of description about this particular product 
          and all that other relevant information that customers might be interested in.
        </Description>

        <FlexContainer>
          <Icon onClick={handleAddToCart} >
            <CartAdd size='30px'/>
          </Icon>

          <Price>${price}</Price>
        </FlexContainer>
      </Wrapper>
    </If>
  )
}

export default ProductCard;

const Wrapper = styled.div`
  min-width: 250px;
  border-radius: 5px;
  background-color:  white;
  padding: 1em 2em;
  font-family: 'Sora', 'Noto Sans Vai', sans-serif;
  display: flex;
  flex-flow: column;
  

  :hover{
    cursor:pointer;
  }
`

const Image = styled.img`
  width: 70%;
  height: 50%;
  margin: 0 auto;
  object-fit: contain;
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
  font-size: 0.9rem;
`

const FlexContainer = styled.div`
 display:flex;
 justify-content: space-between;
 align-items:center;
 padding: 1em 0;

 .product-name{
    text-align: center;
    text-transform: capitalize;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-clamp: 1;
 }

 svg{
    :hover{
      cursor:pointer;
      color: var(--primary-color);
    }
 }
`

const Icon = styled.span`
  background-color: #f0f0f0;
  width: 3em;
  height: 3em;
  display: grid;
  place-items: center;
  border-radius: 50%;
  svg{
    color: #9d6262;
  }

  :hover{
    cursor:pointer;
    svg{
      color: var(--primary-color);
    }
  }
`