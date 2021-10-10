import React from "react";
import {Link} from 'react-router-dom'

const Nav = () => {
  return <nav className="navbar">
    {/*logo*/}
    <div className="navbar_logo">
      <h2>THEBRIDGE SHOP</h2>
    </div>
    <div className="container-buttons">
      <button>Name</button>
      <button>Rating</button>
      <button>Price</button>
    </div>
    <ul className="navbar-links">
      <Link to="/cart">

      </Link>

    </ul>
    
    {/*Hamburguer menu*/}
    <div className="hamburguer-menu-container">

    </div>

  </nav>;
};

export default Nav;
