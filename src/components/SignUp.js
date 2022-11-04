import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { showLoginForm } from '../redux/features/authModalSlice';
import useForm from '../hooks/useForm';
import useAddToLocalStorage from '../hooks/useAddToLocalStorage';


import AuthForm from './AuthFormContainer';
import Input from './Input';

const SignUp = () => {

  const dispatch = useDispatch();
  const {formData, handleChange} = useForm();
  const  {loading, success, err, uploadData} = useAddToLocalStorage();
  console.log(formData);

  const switchToLogin = (e) => {
    e.stopPropagation();
    dispatch(showLoginForm());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadData(formData);
  }

  return (
    <AuthForm onSubmit={handleSubmit}>
      <Input name='names' type='text' placeholder='names eg John Doe' onChange={handleChange}/>
      <Input name='email' type='email' placeholder='johndoe@gmail.com' onChange={handleChange}/>
      <Input name='address' type='text' placeholder='street address eg 3241 Kawanda' onChange={handleChange}/>
      <Input name='country' type='text' placeholder='city, country eg Kampala, Uganda' onChange={handleChange}/>
      <Input name='phone' type='tel' placeholder='phone contact eg +256 787 000 000' onChange={handleChange}/>
      <Input name='password' type='password' placeholder='password' onChange={handleChange}/>
      <Input type='password' placeholder='confirm password' onChange={handleChange}/>
      <Input type='submit' value='SUBMIT'/>

      <label>
        Already have an account? click 
        <span onClick={switchToLogin}> Here </span> 
        to login.
      </label>
    </AuthForm>
  )
}

export default SignUp;
