import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from './AuthContext.js'

function User() {
  const { token, loading } = useContext(AuthContext);
  if (loading) {
    return null;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }
console.log(token, '========token');

  async function handleLogout() {
    try {
      const response = await fetch('http://localhost:3001/logout', {
        method: 'GET',
        credentials: 'include'
      });
  
      if (response.ok) {
        // Logout was successful, redirect the user to the login page
        console.log("Logout successful");
        <Navigate to="/login" replace />;
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  return (
    <div className="user_outer">
      <div className="user_grid">
        <ul>
          <li>My account</li>
          <li>My orders</li>
          <li>Personal details</li>
          <li>Wishlist</li>
          <li>Data and Privacy</li>
        </ul>
        <button className="user_logout_button" type="button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default User;
