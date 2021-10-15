import React, { useContext, useState, useEffect, useRef } from 'react';
import { userContext } from '../../context/useContext';
import ProductList from "../ProductList"
import ProductCard from "../ProductCard"
import { Router, Switch, Route } from 'react-router-dom';
import Search from "../Search";

/* import Cart from "../Cart"
 */
const Main = () => {


  const {newPosts, setNewPosts} = useContext(userContext); 

  const [searchItem, setSearchItem] = useState("")
  //Para el buscador
  
  return (
  <main>
  
          <Switch>
                <Route path="/" component={ProductList} exact /> 
                <Route path="/product/:name" component={ProductCard} />    
                {/* <Route path="/cart" component={Cart} /> */}
                {/* <Route component={Error} /> */}
          </Switch>    
  </main>
   )};

export default Main;
