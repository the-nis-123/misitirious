import styled from 'styled-components';
import SideBarSectionWrapper from './SideBarSectionWrapper';

const CartSideBar = () => {
  return (
    <SideBar>
      <SideBarSectionWrapper title='Wishlist'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </SideBarSectionWrapper>

      <SideBarSectionWrapper title='Saved'>
        <Product/>
        <Product/>
      </SideBarSectionWrapper>

      <SideBarSectionWrapper title='Liked'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </SideBarSectionWrapper>
    </SideBar>
  )
}

export default CartSideBar;

const Product = () =>{
  return(
    <Wrapper>

    </Wrapper>
  )
}


const Wrapper = styled.div`
  background-color: white;
  height: 70px;
  margin-bottom: 5px;
  border-radius: 4px;
`

const SideBar = styled.div`
  background-color: #F8F8F8;
  min-width: 300px;
  overflow-y:auto;
  overflow-x: hidden;
`