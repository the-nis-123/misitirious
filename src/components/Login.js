import styled from 'styled-components';
import {useDispatch } from 'react-redux';
import AuthForm from './AuthFormContainer';
import { showSignupForm } from '../redux/features/authModalSlice';

import Input from './Input';

const Login = () => {
  const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.stopPropagation();
    dispatch(showSignupForm());
  }

  return (
    <AuthForm>
      <Input type='email' placeholder='johndoe@gmail.com'/>
      <Input type='password' placeholder='password'/>
      <Input type='submit' value='SUBMIT'/>

      <label>
        New here? click 
        <span onClick={handleSignup}> Here </span> 
        to signup.
      </label>
    </AuthForm>
  )
}

export default Login;
