import React from 'react'
import './Login.css'
import logo from '../../Assets/logo.png'

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add form submission logic here
        console.log('Form submitted');
      };
  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form onSubmit={handleSubmit} className="login-form">
        <img src={logo} className='logo' alt='Error'></img>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email" id="username" required />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" required />

        <button type="submit">Log In</button>
      </form>
      <div className="shape"></div>
    </div>
  );
};

export default Login
