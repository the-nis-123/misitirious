import styled from 'styled-components';
import SideBarSectionWrapper from './SideBarSectionWrapper';

const StoreSideBar = () => {
  return (
    <SideBar>
      <SideBarSectionWrapper title='Products'/>

      <SideBarSectionWrapper title='Price'/>

      <SideBarSectionWrapper title='Accessories'/>

      <SideBarSectionWrapper title='Brands'/>
    </SideBar>
  )
}

export default StoreSideBar;


const SideBar = styled.div`
  background-color: #F8F8F8;
  min-width: 300px;
  overflow-y:auto;
  overflow-x: hidden;
`