import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setContact(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRegister = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: contact.name,
          email: contact.email,
          password: contact.password
        })
      });
    
      if (response.ok) {
        console.log('Successfully registered');
        navigate('/home');
      } else if (response.status === 400) {
        console.log("This email is already registered");
        // Display an error message to the user
      } else {
        console.error('Registration failed');
        // Display an error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
      // Display an error message to the user
    }
  };

  return (
    <div className="login_form_div">
      <h3>Please fill out the form to register</h3>
      <p>or</p>
      <h3>Sign in with Google</h3>
      <form onSubmit={handleRegister} className='login_form'>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={contact.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <div>
          <button className="login_submit_button" type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;