import React from "react";
import ProductList from "../ProductList"
import ProductCard from "../ProductCard"
import { Router, Switch, Route } from 'react-router-dom';
/* import Cart from "../Cart"
 */
const Main = () => {
  return <div>

          <Switch>
                <Route path="/" component={ProductList} exact /> 
                <Route path="/product/:name" component={ProductCard} />    
                {/* <Route path="/cart" component={Cart} /> */}
                {/* <Route component={Error} /> */}
          </Switch>
  </div>;
};

export default Main;
