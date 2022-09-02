import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import { useAuth, clearErrors, login } from '../../context/auth/AuthState';
import InputForm from '../layout/InputForm';
import InputButton from '../layout/InputButton';

const LoginItemStyles = styled.div`
  .text-primary {
    color: var(--green);
  }
 
`;

const LoginItem = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [authState, authDispatch] = useAuth();
  const { error, isAuthenticated } = authState;

  useEffect(() => {
    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors(authDispatch);
    }
  }, [error, isAuthenticated, authDispatch, setAlert]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login(authDispatch, {
        email,
        password,
      });
    }
  };
  if (isAuthenticated) return <Navigate to='/' />;

  return (
    <LoginItemStyles>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <InputForm
            id='email'
            type='email'
            name='email'
            value={email}
            placeholder='Email Address'
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
        
          <InputForm
            id='password'
            type='password'
            name='password'
            value={password}
            placeholder='Password'
            onChange={onChange}
            required
          />
        </div>
        <br/>  <br/>
        <InputButton type='submit' value='Login' />
      </form>
    </LoginItemStyles>
  );
};

export default LoginItem;
