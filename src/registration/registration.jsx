import React from 'react';
import './registration.css';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <section className='registration-section'>
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
              id='login'
              className='input'
              placeholder='Enter your login...'
              type='text'
            />
          </div>
          <div className='registration-input form__registration-input'>
            <label htmlFor='password' className='input-caption'>
              Password
            </label>
            <input
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
              id='confirm-password'
              className='input'
              placeholder='Enter your password...'
              type='password'
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registration;
