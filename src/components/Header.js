import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { ShoppingCart } from '@styled-icons/feather/ShoppingCart';
import { Search } from '@styled-icons/feather/Search';
import Button from './Button';
import IconWithStyles from './IconWithStyles';
import { siteName } from '../other resources/site-identity';

const Header = () => {
const {cart} = useSelector(state => state.cart);

  return (
    <Wrapper>
      <Section>
        <Logo src={logo} alt='' />
        <h2>{ siteName } </h2>
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
              top:'-6px',
              fontSize:'12px'
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
  background-color: var(--secondary-color, #ffffff);
  display:flex;
  justify-content: space-between;
  align-items: center;
`
const MenuLinks = styled.section`
  display: flex;
  align-items:center;
  gap: 15px;
  font-family: 'Noto Sans Vai', sans-serif;

  a{
    text-decoration: none;
    white-space:nowrap;
    color: black;
    border-bottom: 3px solid var(--secondary-color, #ffffff);

    :hover{
      border-bottom: 3px solid var(--primary-color, #ff0000);
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
`

const Logo  = styled.img`
  width:60px;
  height: auto;
  margin-right: 10px;
`
