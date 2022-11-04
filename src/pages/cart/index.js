import { useState, useEffect } from "react";
import styled from "styled-components";
import CheckOutForm from "./CheckOutForm";
import OrderSummary from "./OrderSummary";
import { useSelector } from "react-redux";
import SideBar from "./SideBar";

function CartWrapper() {
  const { cart } = useSelector(state => state.cart);
  const [subtotal, setSubtotal] = useState(0.00);
  const [totalVat, setTotalVat] = useState(0.00);
    
  useEffect(()=>{
    if(cart.length>1){ 
      const sub = cart.reduce((a,b)=> (a.price * a.count) + (b.price * b.count));
      const vat = cart.reduce((a,b)=> (a.price * (1.25 / 100)) + (b.price * (1.25 / 100)));
      setSubtotal(sub); 
      setTotalVat(vat);
    }

    if(cart.length == 1){ 
      setSubtotal(cart[0].price * cart[0].count); 
      setTotalVat(cart[0].price * (1.25 / 100));
    }
  }, [cart])

  return (
  <PageWrapper>
    <SideBar />
      
    <Wrapper>
      <h1>YOUR CART</h1>
      <OrderSummary cart={cart} />          
      <CheckOutForm vat={totalVat.toFixed(2)} subtotal={subtotal.toFixed(2)} />
    </Wrapper>
  </PageWrapper>
  )
}

export default CartWrapper;

const PageWrapper = styled.div`
  height: calc(100% - 5em);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 0.6em;

  @media only screen and (min-width: 640px)  {
    overflow: hidden;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

const Wrapper = styled.div`
  padding: 2em 0.6em;

  h1{
    color: #c2c2c2;
  }

  h5, h3{
    padding: 0.6em 0;
  }

  @media only screen and (min-width: 640px)  {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 2em;
  }
`


