import styled from 'styled-components';

const CartSideBar = () => {
  return (
    <SideBar>
      <h3>Wishlist</h3>
      <h3></h3>
      <h3></h3>
    </SideBar>
  )
}

export default CartSideBar;


const SideBar = styled.div`
  padding: 30px;
  background-color: white;
  min-width: 300px;
`