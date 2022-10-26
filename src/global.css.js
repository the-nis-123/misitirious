import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
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
    overflow-y:hidden;
    font-family: 'Sora', sans-serif;
  }

  h3,h4,h5,a{
    font-family: 'Noto Sans Vai', 'Sora', sans-serif;
  }

  #root{
    min-height: 100vh;
    overflow: hidden;
    background-color: #f2f2f2;
    position:relative;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none; 
  } 
`;
