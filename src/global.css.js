import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  *,::before, ::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root{
    font-family: 'Signika';
    min-height: 100vh;
    overflow: auto;
    background-color: #f2f2f2;
    position:relative;
  } 
`;
