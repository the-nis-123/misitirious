import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  :root{
    --primary-color: #ff0000;
    --main-background-color: #fafafa;
    --secondary-color: #ffffff;
    --primary-icons-color: #ffffff;
    --secondary-icons-color: #ffffff;
  }

  *,::before, ::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    min-width: 1200px;
    overflow:hidden;
    font-family: 'Sora', sans-serif;
  }

  h3,h4,h5,a{
    font-family: 'Noto Sans Vai', 'Sora', sans-serif;
  }

  #root{
    background-color: var(--main-background-color);
    position:relative;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none; 
  } 
`;
