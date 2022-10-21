import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import Button from './Button';

import IconWithStyles from './IconWithStyles';

import { Home } from '@styled-icons/feather/Home';
import { ShoppingBag } from '@styled-icons/feather/ShoppingBag';
import { ShoppingCart } from '@styled-icons/feather/ShoppingCart';
import { Search } from '@styled-icons/feather/Search';


const Header = () => {
  return (
    <Wrapper>
      <Section>
        <Logo src={logo} alt='' />
        <h2>MISITIRIOUS</h2>
      </Section>
 
      <Section>
        <Section>
          <Link to='/'> {IconWithStyles(Home)} </Link>
          <Link to='/store'> { IconWithStyles(Search) } </Link>
          <Link to='/store'> { IconWithStyles(ShoppingBag) } </Link>
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
