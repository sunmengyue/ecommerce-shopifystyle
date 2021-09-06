import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { register } from '../actions/userActions';

const Register = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(register(name, email, password));
    }
  };
  return (
    <div className="form__container">
      <h1 className="text-4xl uppercase tracking-widest">Sign up</h1>
      {message && <Message>{message}</Message>}
      {error && <Message>{error}</Message>}
      {loading && <Loader />}

      <form onSubmit={submitHandler} className="form">
        {/* name */}
        <div className="form__field">
          <label htmlFor="name" className="mb-3">
            User Name
          </label>
          <input
            className="input"
            type="text"
            id="name"
            placeholder="User name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        {/* email */}
        <div className="form__field">
          <label htmlFor="email" className="mb-3">
            Email Address
          </label>
          <input
            className="input"
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        {/* password */}
        <div className="form__field">
          <label htmlFor="password" className="mb-3">
            Password
          </label>
          <input
            className="input mb-5"
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        {/* confirm password */}
        <div className="form__field">
          <label htmlFor="confirmPassword" className="mb-3">
            Confirm Password
          </label>
          <input
            className="input mb-5"
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className=" bg-black text-white uppercase tracking-widest py-3 px-9"
          onClick={submitHandler}
        >
          Register
        </button>
      </form>
      <p>
        Have an account ?{' '}
        <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
          <span className="link">Login</span>
        </Link>
      </p>
    </div>
  );
};

export default Register;
