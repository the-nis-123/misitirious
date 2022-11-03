import CartProduct from "./CartProduct";
import { FedexAgent, DhlAgent } from "./ShippingAgentCard";
import {Link} from 'react-router-dom';

const OrderSummary = ({cart}) => {

  return (
    <section>
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
    </section>
  )
}

export default OrderSummary;

