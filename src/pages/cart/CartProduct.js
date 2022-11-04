import styled from "styled-components";
import { Trash } from '@styled-icons/feather/Trash';

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeFromCart } from '../../redux/features/cartSlice';



const CartProduct = ({name, image, price, id, quantity}) => {
  const dispatch = useDispatch();
  const handleDecrement = () => dispatch(decrement(id));
  const handleIncrement = () => dispatch(increment(id));
  const handleRemoveFromCart = () => dispatch(removeFromCart(id));
  if(quantity === 0){ dispatch(removeFromCart(id)) }
  
  return (
    <Product>
      <Image> 
        <div style={{backgroundImage:`url(${image})`}}/> 
      </Image>

      <div>
        <Name>{name}</Name>
        <p>${price}</p>
      </div>

      <TrashIcon onClick={handleRemoveFromCart}>
        <Trash />
      </TrashIcon>

      <Buttons>
        <Icon onClick={handleDecrement}>
          <span style={{color:'orange'}}>-</span>
        </Icon>

        <span>{quantity}</span>

        <Icon onClick={handleIncrement}>
          <span style={{color:'green'}}>+</span>
        </Icon>
      </Buttons>
    </Product>
  )
}

export default CartProduct;

const Product = styled.div`
  display:flex;
  align-items:center;
  min-width: 100%;
  border-radius: 5px;
  margin: 0.7em 0;
  background-color: white;
  color: gray;
  position:relative;
  padding: 1em 0;
`;


const Image = styled.section`
  height:7em;
  width: 12em;
  margin-right:15px;
  padding: 10px;


  div{
    width:100%;
    height:100%;
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center;
  }
`;

const Name = styled.p`
  width:200px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  line-clamp: 5; 
`

const TrashIcon = styled.section`
  position: absolute;
  top:10px;
  right:10px;

  svg{
    width: 1.2rem;
    color:red;
  }

  :hover{
    svg{
      cursor:pointer;
    }
  }
`;

const Buttons = styled.section`
  display:flex;
  align-items:center;
  gap:10px;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 3px 5px;

  svg{
    width: 1.2rem;
  }
`;

const Icon = styled.p`
  padding: 1rem;

  :hover{
    background-color:#f2f2f2;
    cursor:pointer;
  }
`
