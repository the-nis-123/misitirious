import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import Button from './Button';

import IconWithStyles from './IconWithStyles';

import { ShoppingCart } from '@styled-icons/feather/ShoppingCart';
import { Search } from '@styled-icons/feather/Search';


const Header = () => {
  return (
    <Wrapper>
      <Section>
        <Logo src={logo} alt='' />
        <h2>MISITIRIOUS</h2>
      </Section>

      <MenuLinks >
        <Link to='/'> Home </Link>
        <Link to='/store'> Our Store</Link>
        <Link to='/store'> Kids </Link>
        <Link to='/store'> Accessories </Link>
        <Link to='/store'>Men</Link>
        <Link to='/store'> Women </Link>
        <Link to='/store'> Footware </Link>
      </MenuLinks>
 
      <Section>
        <Section>
          <Link to='/store'> { IconWithStyles(Search) } </Link>
          <Link to='/cart'> { IconWithStyles(ShoppingCart) } </Link>
        </Section>

        <Button to='/'>Login</Button>
      </Section>
    </Wrapper>
  )
}

export default Header;

const Wrapper  = styled.header`
  width: 100%;
  padding: 10px;
  height: 70px;
  background-color: #f8f8f8;
  display:flex;
  justify-content: space-between;
  align-items: center;
`
const MenuLinks = styled.section`
  display: flex;
  align-items:center;

  a{
    display:inline-block;
    margin-right: 10px;
    text-decoration: none;
    white-space:nowrap;
    color: black;
    padding: 5px;
    border-bottom: 2px solid #f8f8f8;

    :hover{
      border-bottom: 2px solid red;
    }
  }
`;

const Section  = styled.section`
  display: flex;
  align-items:center;

  a{
    display:inline-block;
    margin-right: 20px;
    text-decoration: none;
    color: white;
  }

  h2{
     @media screen and (max-width: 720px) {
      display:none;
    }
  }
`

const Logo  = styled.img`
  width:60px;
  height: auto;
  margin-right: 10px;
`
