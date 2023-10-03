import React, { useState } from 'react';
import './authorization.css';
import { Link } from 'react-router-dom';
import CustomButton from '../UI/button/button';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleLogIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
      })
      .catch(() => alert('Invalid user!'));
  };
  return (
    <section className='registration-section'>
      <div className='registration-block'>
        <h2 className='reg-header registration-section__reg-header'>Sign in</h2>
        <p className='reg-text registration-section__reg-text'>
          If you don’t have an account register you can Register{' '}
          <Link className='rout-link' to='/registration'>
            here
          </Link>
          !
        </p>
        <form
          onSubmit={handleLogIn}
          className='form registration-section__form'
        >
          <div className='registration-input form__registration-input'>
            <label htmlFor='login' className='input-caption'>
              Email
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
          <CustomButton text={'sign in'} />
        </form>
      </div>
    </section>
  );
};

export default Authorization;
