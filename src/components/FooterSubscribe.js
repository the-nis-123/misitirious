import styled from "styled-components";
import { Link } from 'react-router-dom';

import { TwitterWithCircle } from '@styled-icons/entypo-social/TwitterWithCircle';
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import { FacebookWithCircle } from '@styled-icons/entypo-social/FacebookWithCircle';
import { GithubWithCircle } from '@styled-icons/entypo-social/GithubWithCircle';

const FooterSubscribe = () => {
  return (
    <Wrapper>
      <h2>MISITIRIOUS BLOG</h2>

      <p>
        Subscribe to our news letter and
        get instant notifications about our products, events and services
        right into your email inbox.
      </p>

      <form>
        <Input type='text' placeholder='John Doe' />
        <Input type='email' placeholder='johndoe@gmail.com' />
        <Button type='submit' value='Subscribe to Misitirious' />
      </form>

      <FooterIcons>
        <Link to='/'>
          <InstagramWithCircle />
        </Link>
        
        <Link to='/'>
          <FacebookWithCircle />
        </Link>

        <Link to='/'>
          <TwitterWithCircle />
        </Link>

        <Link to='/'>
          <GithubWithCircle />
        </Link>

        <Link to='/'>
          <LinkedinWithCircle />
        </Link>
      </FooterIcons>
    </Wrapper>
  )
}

export default FooterSubscribe;

const Wrapper = styled.section`
  background-color: white;
  text-align: center;
  padding: 20px;
  border-radius: 5px;

 h2{
    margin-bottom: 15px;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
  }

  
  @media screen and (max-width: 4800px) {
    width: 100%;
    margin: 0 auto;
  }
`

const Input = styled.input`
  display: block;
  width: 90%;
  margin: 10px auto;
  padding: 15px;
  outline: none;
  border:  none;
  background-color: #c8c8c8;
`
const Button = styled(Input)`
  color: white;
  background-color: red;
  
   :hover{
    cursor: pointer
  }
`

const FooterIcons = styled.section`
  a{
    color: #594e47;
    text-decoration: none;

    svg{
    width: 30px;
    height: auto;
    margin-right: 15px;

      :hover{
        color: red
      }
    }
  }

  padding: 10px 0;
`