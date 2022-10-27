import styled from 'styled-components';
import { Fedex } from '@styled-icons/fa-brands/Fedex';
import { Dhl } from '@styled-icons/fa-brands/Dhl';


export const FedexAgent = ({icon, name, price}) => {
  return (
    <Wrapper>
      <Icon style={{color:'purple'}}>
        <Fedex size='40px'/>
      </Icon>

      <div>
        <h4>FeDex Delivery</h4>
        <p>Delivery: 3 to 4 days</p>
      </div>

      <p>Free</p>
    </Wrapper>
  )
}



export const DhlAgent = ({icon, name, price}) => {
  return (
    <Wrapper>
      <Icon style={{color:'red'}}>
        <Dhl size='50px'/>
      </Icon>

      <div>
        <h4>DHL Delivery</h4>
        <p>Delivery: 1 to 3 days</p>
      </div>

      <p>$7.99</p>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  height: 90px;
  border: solid 1px #D8D8D8;
  background-color:white;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  display:flex;
  align-items:center;
  gap: 5em;
  :hover{
    cursor:pointer;
  }
  
  p{
    font-size: 0.9rem;
  }
`


const Icon = styled.div`
  background-color:white;
  padding: 10px 20px;
`
