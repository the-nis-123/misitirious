import styled from "styled-components";
import { AddCircle } from '@styled-icons/remix-line/AddCircle';
import { MinusCircle } from '@styled-icons/heroicons-outline/MinusCircle';
import { DeleteForever } from '@styled-icons/material-rounded/DeleteForever';

const CartProduct = ({name, image, qty, price}) => {
  return (
    <Wrapper>
      <Product>
        <Image src={image} />
        <p>mist jacket</p>
      </Product>

      <Price>$870</Price>

      <Quantity>1</Quantity>

      <Price>$870</Price>
      
      <Actions>
        <MinusCircle size='20px' color="orange"/>
        <AddCircle size='20px' color="green" style={{margin:'0 15px'}} />
        <DeleteForever size='20px' color="red"/>
      </Actions>
    </Wrapper>
  )
}

export default CartProduct;


const Wrapper = styled.tr`
  width: 100%;
`;

const Product = styled.td`
  display:flex;
  align-items: center
`;


const Image = styled.img`
  height: 50px;
  width: auto;
  margin-right:15px;
`;

const Quantity = styled.td`

`;

const Price = styled.td`

`;

const Actions = styled.td`
  svg{
    :hover{
      cursor:pointer;
    }
  }
`;