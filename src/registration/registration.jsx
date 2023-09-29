import React, { useState } from 'react';
import './registration.css';
import { Link } from 'react-router-dom';
import CustomButton from '../UI/button/button';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retryPassword, setRetryPassword] = useState('');
  const dispatch = useDispatch();
  const checkPasswords = (password1, password2) => {
    return password1 === password2;
  };
  const handleRegister = (e) => {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }));
        })
        .catch(console.error)
}
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
          </div>
          <CustomButton text={'sign up'} />
        </form>
      </div>
    </section>
  );
};

export default Registration;
