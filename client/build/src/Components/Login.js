import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from './AuthContext.js';

const Login = () => {
  const [contact, setContact] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState(null); // New state for handling error messages
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: contact.email,
          password: contact.password
        })
      });
        const data = await response.json()
        setToken(data.response.token); //set the token to the localhost
        navigate("/user");
   
    } catch (error) {
      console.error("Authentication failed:", error);
      setToken(null);
      localStorage.removeItem("token");
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data); // Set the error message if present in the error response
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };
  

  return (
    <div className="login_form_div">
      <h2><strong>Welcome back</strong></h2>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}{" "}
      <form onSubmit={handleLogin} className='login_form'>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={contact.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <div>
          <button className="login_submit_button" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
