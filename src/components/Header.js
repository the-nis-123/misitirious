import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { ShoppingCart } from '@styled-icons/feather/ShoppingCart';
import { Search } from '@styled-icons/feather/Search';
import IconWithStyles from './IconWithStyles';
import { siteName } from '../other resources/site-identity';
import {AccountCircle} from '@styled-icons/remix-fill/AccountCircle';

const Header = () => {
const {cart} = useSelector(state => state.cart);

  return (
    <Wrapper>
      <Section>
        <Logo src={logo} alt='' />
        <h2 className='hide-on-small-screens'>{ siteName } </h2>
      </Section>

      <MenuLinks className='hide-on-small-screens'>
        <Link to='/'> Home </Link>
        <Link to='/store'> Our Store</Link>
        <Link to='/store'> Kids </Link>
        <Link to='/store'> Accessories </Link>
        <Link to='/store'>Men</Link>
        <Link to='/store'> Women </Link>
        <Link to='/store'> Footware </Link>

        <a 
          href='https://the-nis-123.github.io/misitirious-blog/'
          target="_blank" 
          rel="noopener noreferrer"
        >Our Blog</a>
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

        <Link to='/'> { IconWithStyles(AccountCircle) }  </Link>
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
  max-width: 100vw; 
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
