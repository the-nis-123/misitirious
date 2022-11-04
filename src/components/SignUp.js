import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { showLoginForm } from '../redux/features/authModalSlice';

import AuthForm from './AuthFormContainer';
import Input from './Input';

const SignUp = () => {
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.stopPropagation();
    dispatch(showLoginForm());
  }

  return (
    <AuthForm>
      <Input type='text' placeholder='names eg John Doe'/>
      <Input type='email' placeholder='johndoe@gmail.com'/>
      <Input type='text' placeholder='street address eg 3241 Kawanda'/>
      <Input type='text' placeholder='city, country eg Kampala, Uganda'/>
      <Input type='tel' placeholder='phone contact eg +256 787 000 000'/>
      <Input type='password' placeholder='password'/>
      <Input type='password' placeholder='confirm password'/>
      <Input type='submit' value='SUBMIT'/>

      <label>
        Already have an account? click 
        <span onClick={handleLogin}> Here </span> 
        to login.
      </label>
    </AuthForm>
  )
}

export default SignUp;
