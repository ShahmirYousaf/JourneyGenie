import React, {useState} from 'react'
import './Login.css'
import logo from '../../Assets/logo.png'

const Login = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
});

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
    setErrors({
        ...errors,
        [name]: ''
    });
};

const handleSubmit = (e) => {
  e.preventDefault();
  
  if (!formData.username.trim()) {
      setErrors({
          ...errors,
          username: 'Username is required'
      });
      return;
  }
  if (!formData.password.trim()) {
      setErrors({
          ...errors,
          password: 'Password is required'
      });
      return;
  }
  
  console.log('Form submitted:', formData);
};

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form onSubmit={handleSubmit} className="login-form">
        <img src={logo} className='logo' alt='Error'></img>

        <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="Email"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                {errors.username && <div className="error">{errors.username}</div>}

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                {errors.password && <div className="error">{errors.password}</div>}

                <button type="submit">Log In</button>
      </form>
      <div className="shape"></div>
    </div>
  );
};

export default Login
