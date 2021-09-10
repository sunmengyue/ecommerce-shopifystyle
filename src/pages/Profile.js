import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

const Profile = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(updateUserProfile({ id: user._id, name, password }));
    }
  };

  return (
    <div className="max-w-2xl m-auto p-5 md:flex md:justify-around">
      <div className="mb-8 w-1/2">
        {success && <div className="primary_msg mb-5">Profile Updated</div>}
        <h1 className="text-3xl uppercase tracking-widest mb-5">
          User Profile
        </h1>
        {message && <div className="error_msg">{message}</div>}
        {error && <div className="error_msg">{error}</div>}
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
            Update
          </button>
        </form>
      </div>

      <div>
        <h1 className="uppercase tracking-widest text-3xl">My orders</h1>
      </div>
    </div>
  );
};

export default Profile;
