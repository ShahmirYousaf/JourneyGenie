import React, {useState} from 'react'
import './Login.css'
import logo from '../../Assets/logo.png'
import axios from 'axios';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
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

const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!formData.email.trim()) {
      setErrors({
          ...errors,
          email: 'Email is required'
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
  try {
    const response = await axios.post('/api/auth/Login', formData);
    console.log(response.data); // handle success, such as storing token in localStorage and redirecting user
  } catch (error) {
    setErrors(error.response.data.error); // handle error
  }
  
  console.log('Form submitted:', formData);
};

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form onSubmit={handleSubmit} className="login-form">
        <img src={logo} className='logo' alt='Error'></img>

        <label htmlFor="email">Email</label>
                <input
                    type="text"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <div className="error">{errors.email}</div>}

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
