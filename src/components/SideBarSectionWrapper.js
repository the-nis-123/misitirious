import styled from 'styled-components';
import {CaretDownSquare} from '@styled-icons/boxicons-solid/CaretDownSquare';
import {CaretUpSquare} from '@styled-icons/boxicons-solid/CaretUpSquare';
import { useState } from 'react';


const SideBarSectionWrapper = ({children, title}) => {
  const [show, setShow] = useState(true);

  return (
    <Wrapper>
      <Head>
        <h3> { title } </h3>
        <section>
          <If condition={show}>
            <CaretUpSquare size='20px' onClick={()=>setShow(false)} />
          </If>

          <If condition={!show}>
            <CaretDownSquare size='20px' onClick={()=>setShow(true)} />
          </If>
        </section>
      </Head>

      <If condition={show}>
        <Content>
          {children}
          <h3> { title } </h3> 
          <h3> { title } </h3>
          <h3> { title } </h3>
          <h3> { title } </h3>
        </Content>
      </If>
    </Wrapper>
  )
}

export default SideBarSectionWrapper;


const Wrapper = styled.div`
  width: 100%;
  background-color: inherit;
  border-bottom: 1px solid #E8E8E8;
  padding: 0 10px;
`

const Head = styled.div`
  width: 100%;
  background-color: inherit;
  display: flex;
  align-items:center;
  justify-content: space-between;
  color:#c2c2c2;
  padding: 6px 10px;

  h3{
    color: black;
  }

  section{
    svg{
      :hover{
        cursor: pointer;
      }
    }
  }
`

const Content = styled.div`
  width: 100%;
  background-color: inherit;
  padding: 10px;
`