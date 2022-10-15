import styled from "styled-components";
import { Link } from 'react-router-dom';

const Button = ({children, to}) => {
  return (
    <MyButton to={to}>
      {children}
    </MyButton>
  )
}

export default Button;

const MyButton = styled(Link)`
  border: none;
  outline: none;
  padding: 8px 35px;
  background-color: red;
  color: white !important;
`

