import styled from 'styled-components';
import { ShoppingCart } from '@styled-icons/feather/ShoppingCart';
import {AccountCircle} from '@styled-icons/remix-fill/AccountCircle';
import { Search } from '@styled-icons/feather/Search';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../logo.png';
import IconWithStyles from './IconWithStyles';
import { siteName } from '../other resources/site-identity';
import { showLoginForm } from '../redux/features/authModalSlice';


const Header = () => {
  const {cart} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleAuth = (e) => {
    e.stopPropagation();
    dispatch(showLoginForm());
  }

  return (
    <Wrapper>
      <Section>
        <Logo src={logo} alt='' />
        <h2>{ siteName } </h2>
      </Section>

      <MenuLinks>
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

        <Link to='#' onClick={handleAuth}> { IconWithStyles(AccountCircle) }  </Link>
      </Section>
    </Wrapper>
  )
}

export default Header;

const Wrapper  = styled.header`
  padding: 0.5em;
  background-color: var(--secondary-color, #ffffff);
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; 
`
const MenuLinks = styled.section`
  display: none;

  @media only screen and (min-width: 1000px)  {
    display: flex;
    align-items:center;
    gap: 1em;
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
  }
`;

const Section  = styled.section`
  display: flex;
  align-items:center;

  h2{
    display: none;
    
    @media only screen and (min-width: 640px)  {
      display: block;
    }
  }

  a{
    display:inline-block;
    margin-right: 20px;
    text-decoration: none;
    color: white;
  }
`

const Logo  = styled.img`
  width: 4em;
  height: auto;
  margin-right: 1em;
`
