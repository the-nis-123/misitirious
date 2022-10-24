import styled from "styled-components";
import CartProduct from "../components/CartProduct";
import CartSideBar from "../components/CartSideBar";
import { DhlAgent } from "../components/ShippingAgentCard";
import { FedexAgent } from "../components/ShippingAgentCard";
import CheckOutForm from "../components/CheckOutForm";
import { useSelector } from "react-redux";
import {useGetAllFilteredProductsQuery} from '../redux/misitiriousApi';

function CartWrapper() {
  let cartUrl='';
  const {cart} = useSelector(state => state.cart);

  if(cart.length>0){
    let url = '/store?id='+cart[0];
    for(let i =1; i< cart.length; i++){
      url += `&id=${cart[i]}`;
    }

    cartUrl = url;
  }

  const data = useGetAllFilteredProductsQuery(cartUrl);
  
  return (
    <PageWrapper>
      <CartSideBar />

      <Wrapper>
        <h2>Shopping Cart</h2>

        <CheckOut>
          <Column>
            <h3>Order summary</h3>
            <If condition={data?.data}>
              <For each='item' of={data.data}>
                <CartProduct 
                  key={item.id} 
                  id={item.id} 
                  image={item.image} 
                  price={item.price} 
                  name={item.name} 
                />
              </For>
            </If>
            
            <h4>Our shipping partners</h4>
            <FedexAgent />
            <p>International shipping</p>
            <DhlAgent />
          </Column>

          <CheckOutForm />
        </CheckOut>
      </Wrapper>
    </PageWrapper>
  )
}

export default CartWrapper;


const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: inherit;
  height: calc(100vh - 70px);
  width: 100%;
  overflow: hidden;
`

const Wrapper = styled.div`
  background-color: inherit;
  padding: 20px 10px;
  overflow-y:auto;
  overflow-x:hidden;

  h2{
    padding: 0 20px;
    color:grey;
    text-transform:uppercase;
  }
`
const CheckOut = styled.div`
  background-color: inherit;
  display: flex;
  justify-content:space-between
  width:100%;
  gap: 15px;
`

const Column = styled.div`
  background-color:inherit;
  width: 50%;
  padding: 20px;
  h5{
    margin-top: 10px;
    padding: 5px 0;
  }
`

