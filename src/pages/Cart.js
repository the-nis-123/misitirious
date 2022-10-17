import styled from "styled-components";
import FooterBlock from "../components/Footer";
import CartProduct from "../components/CartProduct";

import image1 from '../images/445.png';
import image2 from '../images/443.png';
import image3 from '../images/675.png';
import image4 from '../images/667.png';

function Cart() {
  return (
    <>
      <PageWrapper>
        <SideBar>

        </SideBar>

        <div>
          <h2>Shopping Cart</h2>
          <BlockThree >
            <Table>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
              <CartProduct image={image1} />
              <CartProduct image={image3}/>
              <CartProduct image={image4}/>
              <CartProduct image={image2}/>
            </Table>
          </BlockThree>

          <BlockFive>
            <h4>Proceed to checkout</h4>
          </BlockFive>
        </div>
      </PageWrapper>
    
      <FooterBlock />
    </>
  )
}

export default Cart;


const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: inherit;
`

const Wrapper = styled.div`
  background-color: inherit;

  h2{
    padding: 10px 0;
  }
`

const BlockThree = styled.div`
  background-color: inherit;
`
const Table = styled.table`
  width: 100%;
  overflow-x: auto;
  
  th{
     color: #de9c9d;
     background-color: grey;
  }

  th, td {
    padding: 7px 15px;
    text-align: left;
  }

  tr:nth-child(odd) {background-color: #f8f8f8;}
`

const BlockFive = styled.div`
padding: 30px;
 background-color: white;
`


const SideBar = styled.div`
  padding: 30px;
  background-color: white;
`