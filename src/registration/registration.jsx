import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import './registration.css';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from '../UI/button/button';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { auth } from '../firebase';
import { useValid } from '../hooks/use-valid';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retryPassword, setRetryPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkPasswords = (password1, password2) => {
    return password1 === password2;
  };
  const isPasswordValid = useValid(password, ['lengthcheck']);
  const isEmailValid = useValid(email, ['isempty']);
  const disabledState =
    !checkPasswords(password, retryPassword) && isPasswordValid && isEmailValid;

  const handleRegister = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/home');
      })
      .catch(console.error);
  };
  return (
    <section onSubmit={handleRegister} className='registration-section'>
      <div className='registration-block'>
        <h2 className='reg-header registration-section__reg-header'>Sign in</h2>
        <p className='reg-text registration-section__reg-text'>
          If you already have an account register you can Login{' '}
          <Link className='rout-link' to='/authorization'>
            here
          </Link>
          !
        </p>
        <form className='form registration-section__form'>
          <div className='registration-input form__registration-input'>
            <label htmlFor='login' className='input-caption'>
              Login
            </label>
            <input
              required
              value={email}
              onInput={(e) => {
                setEmail(e.target.value);
              }}
              id='login'
              className='input'
              placeholder='Enter your login...'
              type='email'
            />
          </div>
          <div className='registration-input form__registration-input'>
            <label htmlFor='password' className='input-caption'>
              Password
            </label>
            <input
              required
              value={password}
              onInput={(e) => {
                setPassword(e.target.value);
              }}
              id='password'
              className='input'
              placeholder='Enter your password...'
              type='password'
            />
          </div>
          <div className='registration-input form__registration-input'>
            <label htmlFor='confirm-password' className='input-caption'>
              Confrim Password
            </label>
            <input
              required
              value={retryPassword}
              onInput={(e) => {
                setRetryPassword(e.target.value);
              }}
              id='confirm-password'
              className='input'
              placeholder='Enter your password...'
              type='password'
            />
            {!checkPasswords(password, retryPassword) && (
              <label
                htmlFor='confirm-password'
                className='input-caption registration-input__input-caption_red'
              >
                Passwords must match
              </label>
            )}
          </div>
          <CustomButton disabledState={disabledState} text={'sign up'} />
        </form>
      </div>
    </section>
  );
};

export default Registration;
