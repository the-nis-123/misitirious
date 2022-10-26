import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import Button from './Button';
import { useSelector } from 'react-redux';

import IconWithStyles from './IconWithStyles';

import { ShoppingCart } from '@styled-icons/feather/ShoppingCart';
import { Search } from '@styled-icons/feather/Search';



const Header = () => {
const {cart} = useSelector(state => state.cart);

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
        <Link to='/store'> Our Blog </Link>
      </MenuLinks>
 
      <Section>
        <Section>
          <Link to='/store'> { IconWithStyles(Search) } </Link>
          <Link to='/cart' style={{position:'relative'}}> 
            { IconWithStyles(ShoppingCart) } 
            <span style={{
              color:'red', 
              position:'absolute',
              right:'-10px',
              top:'-6px'
            }}>{cart.length}</span>
          </Link>
        </Section>

        <Button to='/'>Login</Button>
      </Section>
    </Wrapper>
  )
}

export default Header;

const Wrapper  = styled.header`
  padding: 10px;
  height: 70px;
  background-color: #fff;
  display:flex;
  justify-content: space-between;
  align-items: center;
`
const MenuLinks = styled.section`
  display: flex;
  align-items:center;
  font-family: 'Noto Sans Vai', sans-serif;

  a{
    display:inline-block;
    margin-right: 10px;
    text-decoration: none;
    white-space:nowrap;
    color: black;
    padding: 5px;
    border-bottom: 2px solid #fff;

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
