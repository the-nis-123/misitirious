import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Fedex } from '@styled-icons/fa-brands/Fedex';
import { Dhl } from '@styled-icons/fa-brands/Dhl';

export const FedexAgent = () => {
  return (
    <Wrapper>
      <Icon style={{color:'purple'}}>
        <Fedex size='60px'/>
      </Icon>

      <div>
        <h4>FeDex Delivery</h4>
        <p>5 to 7 working days</p>
        <p>Free</p>
      </div>
    </Wrapper>
  )
}

export const DhlAgent = () => {
  const [subtotal, setSubtotal] = useState(0.00);
  const { cart } = useSelector(state => state.cart);

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
    <Wrapper>
      <Icon style={{color:'red'}}>
        <Dhl size='60px'/>
      </Icon>

      <div>
        <h4>DHL Delivery</h4>
        <p>1 to 2 working days</p>
        <p>${ (0.01 * subtotal).toFixed(2) }</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 7em;
  border: solid 1px #D8D8D8;
  background-color:white;
  padding: 0.6em 1em;
  border-radius: 5px;
  margin: 0.6em 0;
  display:flex;
  align-items:center;
  justify-content: space-between;

  :hover{
    cursor:pointer;
  }
  
  p{
    font-size: 0.9rem;
  }
`

const Icon = styled.div`
  background-color:white;
  padding: 0.6em;
`
