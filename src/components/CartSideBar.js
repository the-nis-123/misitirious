import styled from 'styled-components';
import SideBarSectionWrapper from './SideBarSectionWrapper';

const CartSideBar = () => {
  return (
    <SideBar>
      <SideBarSectionWrapper title='Wishlist'/>

      <SideBarSectionWrapper title='Saved'/>

      <SideBarSectionWrapper title='Liked'/>
    </SideBar>
  )
}

export default CartSideBar;


const SideBar = styled.div`
  background-color: #F8F8F8;
  min-width: 300px;
  overflow-y:auto;
  overflow-x: hidden;
`