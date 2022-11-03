import styled from 'styled-components';
import { useState } from 'react';
import {CaretDown} from '@styled-icons/boxicons-regular/CaretDown';
import {CaretRight} from '@styled-icons/boxicons-regular/CaretRight';

const FilterSection = ({children, title}) => {
  const [show, setShow] = useState(true);

  return (
    <Wrapper>
      <Head>
        <strong> { title } </strong>
        <section>
          <If condition={show}>
            <CaretDown size='20px' onClick={()=>setShow(false)} />
          </If>

          <If condition={!show}>
            <CaretRight size='20px' onClick={()=>setShow(true)} />
          </If>
        </section>
      </Head>

      <If condition={show}>
        <Content>
          {children}
        </Content>
      </If>
    </Wrapper>
  )
}

export default FilterSection;


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

  strong{
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