import React from "react";
import {Link} from 'react-router-dom'
import Search from '../Search'

const Nav = () => {

 /*  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
 */




  return <nav className="navbar">
    <h2>THEBRIDGE|_|GAMESHOP</h2>
    
    <ul className="navbar-links">
      <li>
      <Link to="/cart">
        <i className="fas fa-shopping-cart"></i>
          Cart
          <span className="cartlogo_badge">0</span>
      </Link>
      </li> 
      <li>
     {/*  <Link to="/">
          Shop
      </Link> */}
      </li>
    </ul>

    {/*Hamburguer menu*/}
    <div className="hamburguer-menu-container">

    </div>

  </nav>;
};

export default Nav;
