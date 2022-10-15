import styled from "styled-components";

const SideBarIcons = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default SideBarIcons;

const Wrapper = styled.section`
  height: 100%;
  width: 60px;
  background-color: inherit;
  display: flex;
  flex-flow: column;
  align-items:center;
  justify-content:center;
  gap:20px;
  svg{
    :hover{
      cursor:pointer;
    }
  }

  @media screen and (max-width: 960px) {
   display: none;
  }
`