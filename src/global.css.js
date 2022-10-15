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
    width: 100%;
    overflow-y: auto;
    background-color: #f2f2f2;
  }

  ::-webkit-scrollbar{
    display: none;
    background: #0a000a;
  }
`;


