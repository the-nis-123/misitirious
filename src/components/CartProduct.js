import styled from "styled-components";
import { Trash } from '@styled-icons/feather/Trash';

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeFromCart } from '../redux/features/cartSlice';



const CartProduct = ({name, image, price, id}) => {
  const dispatch = useDispatch();
  const handleDecrement = () => dispatch(decrement());
  const handleIncrement = () => dispatch(increment());
  const handleRemoveFromCart = () => dispatch(removeFromCart({id}));

  
  return (
    <Product>
      <Image> 
        <div style={{backgroundImage:`url(${image})`}}/> 
      </Image>

      <div>
        <Name>{name}</Name>
        <p>${price}</p>
      </div>

      <TrashIcon>
        <Trash onClick={handleRemoveFromCart}/>
      </TrashIcon>

      <Buttons>
        <Icon onClick={handleDecrement}>
          <span>-</span>
        </Icon>

        <span>0</span>

        <Icon>
          <span onClick={handleIncrement}>+</span>
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
  margin: 3px 0;
  background-color: white;
  color: gray;
  position:relative;
`;


const Image = styled.section`
  height: 80px;
  width: 100px;
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
    width: 15px;
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
    width: 20px;
  }
`;

const Icon = styled.p`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display:flex;
  align-items:center;
  justify-content:center;

  :hover{
    background-color:#f2f2f2;
    cursor:pointer;
  }
`
