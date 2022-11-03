import styled from "styled-components";
import {useState} from 'react';
import SideBar from "./SideBar";

function PageContainer({children}) {
  
  return (
    <PageWrapper>
      <SideBar />
        
      <Wrapper>
       {children}
      </Wrapper>
    </PageWrapper>
  )
}

export default PageContainer;

const PageWrapper = styled.div`
  height: calc(100% - 5em);
  overflow: hidden;
  padding: 0 0.6em;

  @media only screen and (min-width: 640px)  {
    overflow: hidden;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`

const Wrapper = styled.div`
  padding: 1em 0;
  overflow: auto;

  @media only screen and (min-width: 640px)  {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 0.6em;
  }
`