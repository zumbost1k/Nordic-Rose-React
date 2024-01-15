import React, { useState } from 'react';
import './sign_up.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@']+(\.[^<>()[\].,;:\s@']+)*)|('.+'))@(([^<>()[\].,;:\s@']+\.)+[^<>()[\].,;:\s@']{2,})$/iu;
  const handleSubmit = (event) => {
    event.preventDefault();
    if (EMAIL_REGEXP.test(email)) {
      try {
        fetch(
          'https://study-group-backend.onrender.com/users/zumbost1k/subscribers',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          }
        ).finally(setEmail(''));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className='sign_up'>
      <h2 className='sign_up_caption'>Sign up for the newsletter</h2>
      <p className='sign_up_text'>
        If you want relevant updates occasionally, sign up for the private
        newsletter. Your email is never shared.
      </p>
      <form onSubmit={handleSubmit} className='mail'>
        <input
          className='input_mail'
          placeholder='Enter your email...'
          type='email'
          value={email}
          onChange={handleChange}
        />
        <button
          type='submit'
          className='mail_text'
          onClick={(event) => event.preventDefault()}
        >
          sign up
        </button>
      </form>
    </section>
  );
};
export default SignUp;
