import styled from 'styled-components';

const StoreSideBar = () => {
  return (
    <SideBar>
      <h3>price</h3>
      <p>Price</p>

      <h3>category</h3>
      <p>Kids</p>
      <p>Women</p>
      <p>men</p>

      <h3>Accessories</h3>
      <p>Shoes</p>
      <p>Watches</p>
      <p>Belts</p>
      <p>Jewellery</p>

      <h3>Brands</h3>
    </SideBar>
  )
}

export default StoreSideBar;


const SideBar = styled.div`
  padding: 30px;
  background-color: white;
  min-width: 300px;
`