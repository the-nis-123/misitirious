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
    font-size:100%;
  }

  body{
    font-family: 'Sora', sans-serif;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }

  #root{
    background-color: var(--main-background-color);
    position:relative;
    user-select: none;
    height: 100%;
    width: 100%;
    overflow: auto;
  }
  
  
  h3,h4,h5,a{
    font-family: 'Noto Sans Vai', 'Sora', sans-serif;
  }

  .hide-on-small-screens{
    display: none;
  }
`;
