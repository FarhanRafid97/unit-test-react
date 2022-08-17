import React, { useState } from 'react';

const Form = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.email.includes('@')) {
      return setError('invalid email');
    }
    if (input.password.length < 3) {
      return setError('invalid password');
    }
    if (input.password !== input.confirmPassword) {
      return setError('confirm password invalid');
    }
    setError('no error');
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {' '}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            id="email"
            name="email"
            placeholder="Type here"
            value={input.email}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="Password"
            name="password"
            value={input.password}
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <label htmlFor="Confirm Password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="Confirm Password"
            name="confirmPassword"
            placeholder="Type here"
            value={input.confirmPassword}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit" className="btn ">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
