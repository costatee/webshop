import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ProtectedRoutes from './protected-routes.js'
import Navbar from './Navbar.js'; // Assuming Navbar component is located in 'Navbar.js'
import Home from './Home.js'; // Assuming Home component is located in 'Home.js'
import User from './User.js'; // Assuming User component is located in 'User.js'
import Login from './Login.js';
import Wishlist from './Wishlist.js';
import Basket from './Basket.js';
import Search from "./Search.js";
import Register from './Register.js';
import Orders from './Orders.js';
import { AuthProvider } from './AuthContext.js';

const App = () => {
  return (
    <Router>
      <Navbar />
      <AuthProvider>
      <Routes>
            <Route path="/user" element={<User />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Basket />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
