import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom';

import wishlistIcon from "../Icons/wishlist.png";
import cartIcon from "../Icons/cart.png";
import searchIcon from "../Icons/search.png";
import logo from "../Icons/logo.png";
import userIcon from "../Icons/user.png";

// import User from "./User";
// import Home from "./Home";
// import Wishlist from "./Wishlist";
// import Basket from "./Basket";
// // import Search from "./Search";

function Navbar() {
    return (
        <header>
            <div className="logo_box">
                <Link to="/"><img className="logo" src={logo} alt="company_logo"></img></Link>
            </div>
            <nav>
                <ul className="nav__links">
                    <li><Link to="/user"><img className="nav_bar_icons" src={userIcon} alt="user_icon"></img></Link></li>
                    <li><Link to="/wishlist"><img className="nav_bar_icons" src={wishlistIcon} alt="wishlist_icon"></img></Link></li>
                    <li><Link to="/cart"><img className="nav_bar_icons" src={cartIcon} alt="basket_icon"></img></Link></li>
                    {/* <li><input className="search_input_box" placeholder="Search"></input></li> */}
                    <li><Link to="/search"><img className="nav_bar_icons" src={searchIcon} alt="search_icon"></img></Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
