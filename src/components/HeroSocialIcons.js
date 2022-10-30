import styled from "styled-components";
import IconWithStyles from "./IconWithStyles";
import { links } from "../other resources/social-links";

const SideBarIcons = () => {
  return (
    <Wrapper>
      <For each='link' of={links}>
        <a 
          href={link.link}
          key={links.indexOf(link)}
          target="_blank" 
          rel="noopener noreferrer"
        >
          {IconWithStyles(link.icon)}
        </a>
      </For>
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

  a{
    text-decoration:none;
  }
  
  svg{
    :hover{
      cursor:pointer;
    }
  }
`