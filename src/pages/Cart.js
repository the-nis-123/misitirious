import { useState, useEffect } from "react";
import styled from "styled-components";
import CheckOutForm from "../components/CheckOutForm";
import OrderSummary from "../components/OrderSummary";
import { useSelector } from "react-redux";

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
      <h2>Shopping Cart</h2>

      <CheckOut>
        <OrderSummary cart={cart} />          
        <CheckOutForm vat={totalVat.toFixed(2)} subtotal={subtotal.toFixed(2)} />
      </CheckOut>
    </PageWrapper>
  )
}

export default CartWrapper;


const PageWrapper = styled.div`
  height: calc(100vh - 70px);
  overflow-y:auto;
  overflow-x:hidden;
  padding: 20px 10px;

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
  gap: 15px;
`