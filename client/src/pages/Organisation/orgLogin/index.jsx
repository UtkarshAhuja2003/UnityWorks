import React, { useState } from 'react';
import axios from 'axios';
import image from "../../../assets/signin.png";
import './style.css';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post('https://unityworks-backend.onrender.com/api/v1/signinOrganisation', { email, password });
      const { token, user } = response.data;
      localStorage.setItem("jwt", token);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("role","organisation")
            navigate('/organisation/dashboard');
      // You can save the token and user data to your state or context for authentication purposes
      console.log('Logged in:', user);
    } catch (error) {
      console.error('Login error:', error.response.data.error);
    }
  };

  return (
    <div className='login-container'>
      <div className='image-container'>
        <img src={image} alt="" />
      </div>
      <div className='form-container'>
        <div className='form-box'>
          <div className='form-header'>
            <span>Sign In</span>
          </div>
          <form onSubmit={handleLogin}>
            <div className='input-container'>
              <AlternateEmailIcon />
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input-container'>
              <LockPersonIcon />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className='submit-button'>Submit</button>
            {/* <div className='registration-links'>
              Not a member?{' '}
              <button className='registration-button' id="registerCandidate">Register as Candidate</button>{' '}
              <button className='registration-button' id="registerOrganisation">Register as an Organisation</button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;