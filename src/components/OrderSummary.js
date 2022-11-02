import styled from "styled-components";
import { DhlAgent } from "../components/ShippingAgentCard";
import CartProduct from "../components/CartProduct";
import { FedexAgent } from "../components/ShippingAgentCard";
import {Link} from 'react-router-dom';

const OrderSummary = ({cart}) => {

  return (
    <Column>
      <h3>Order summary</h3>

      <If condition={cart.length > 0 }>
        <For each='item' of={cart}>
          <CartProduct 
            key={item.id} 
            id={item.id} 
            image={item.image} 
            price={item.price} 
            name={item.name} 
            quantity={item.count}
          />
        </For>
      </If>

      <If condition={cart.length < 1}>
        <p style={{
          padding:"4rem 10px",
          color:'grey',
          textAlign:'center',
          backgroundColor:'white',
        }}>Nothing added to cart, <Link to='/store'>continue shopping</Link></p>
      </If>
      
      <h4>Our shipping partners</h4>
      <FedexAgent />
      <p>International shipping</p>
      <DhlAgent />
    </Column>
  )
}

export default OrderSummary;


const Column = styled.div`
  flex: 50%;

  h5{
    margin-top: 10px;
    padding: 5px 0;
  }
`