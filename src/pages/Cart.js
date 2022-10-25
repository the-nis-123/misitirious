import { useState, useEffect } from "react";
import styled from "styled-components";
import CartProduct from "../components/CartProduct";
import CartSideBar from "../components/CartSideBar";
import { DhlAgent } from "../components/ShippingAgentCard";
import { FedexAgent } from "../components/ShippingAgentCard";
import CheckOutForm from "../components/CheckOutForm";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';

function CartWrapper() {
  const { cart } = useSelector(state => state.cart);
  const [subtotal, setSubtotal] = useState(0);
  const [vat, setVat] = useState(0);

    
  useEffect(()=>{
    if(cart.length>1){ 
      const sub = cart.reduce((a,b)=> (a.price * a.count) + (b.price * b.count));
      setSubtotal(sub); 
    }

    if(cart.length == 1){ 
      setSubtotal(cart[0].price * cart[0].count); 
    }
  }, [cart])


  
  return (
    <PageWrapper>
      <CartSideBar />

      <Wrapper>
        <h2>Shopping Cart</h2>

        <CheckOut>
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
                textAlign:'center'
              }}>Nothing added to cart, <Link to='/store'>continue shopping</Link></p>
            </If>
            
            <h4>Our shipping partners</h4>
            <FedexAgent />
            <p>International shipping</p>
            <DhlAgent />
          </Column>

          <CheckOutForm vat={0} subtotal={subtotal} />
        </CheckOut>
      </Wrapper>
    </PageWrapper>
  )
}

export default CartWrapper;


const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: calc(100vh - 70px);
  width: 100%;
  overflow: hidden;
`

const Wrapper = styled.div`
  padding: 20px 10px;
  overflow-y:auto;
  overflow-x:hidden;

  h2{
    padding:0 20px;
    color:grey;
    text-transform:uppercase;
  }

  h3, h4{
    padding:10px 0;
  }
`
const CheckOut = styled.div`
  display: flex;
  justify-content:space-between
  width:100%;
  gap: 15px;
`

const Column = styled.div`
  width: 50%;
  padding: 20px;
  h5{
    margin-top: 10px;
    padding: 5px 0;
  }
`

