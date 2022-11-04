import styled from 'styled-components';
import { useEffect } from 'react';
import {useDispatch } from 'react-redux';
import AuthForm from './AuthFormContainer';
import { showSignupForm } from '../redux/features/authModalSlice';
import useAddToLocalStorage from '../hooks/useAddToLocalStorage';

import useForm from '../hooks/useForm';

import Input from './Input';

const Login = () => {
  const dispatch = useDispatch();
  const {formData, handleChange} = useForm();
  const  {loading, success, err, uploadData} = useAddToLocalStorage();
  console.log(formData);

  const switchToSignup = (e) => {
    e.stopPropagation();
    dispatch(showSignupForm());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadData(formData);
  }

  return (
    <AuthForm onSubmit={handleSubmit} >
      <Input name='email' type='email' placeholder='johndoe@gmail.com' onChange={handleChange}/>
      <Input name='password' type='password' placeholder='password' onChange={handleChange}/>
      <Input type='submit' value='SUBMIT'/>

      <label>
        New here? click 
        <span onClick={switchToSignup}> Here </span> 
        to signup.
      </label>
    </AuthForm>
  )
}

export default Login;
