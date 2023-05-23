import React, { useState } from 'react';
import './sign_up.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    setEmail(event.target.value);
  }

  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const handleSubmit = () => {
    if (EMAIL_REGEXP.test(email)) {
      fetch('https://dolphin-app-cbjj4.ondigitalocean.app/users/misha/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
    }
  }

  return (
    <section className='sign_up'>
      <h2 className='sign_up_caption'>Sign up for the newsletter</h2>
      <p className='sign_up_text'>
        If you want relevant updates occasionally, sign up for the private newsletter. Your
        email is never shared.
      </p>
      <form onSubmit={handleSubmit} className='mail'>
        <input
          className='input_mail'
          placeholder='Enter your email...'
          type='email' value={email}
          onChange={handleChange} />
        <button type='submit' className='mail_text'>sign up</button>
      </form>
    </section>
  );
}
export default SignUp;
