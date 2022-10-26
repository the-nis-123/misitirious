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
  }


  #root{
    font-family: 'Signika';
    min-height: 100vh;
    overflow: hidden;
    background-color: #f2f2f2;
    position:relative;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none; 
  } 
`;
