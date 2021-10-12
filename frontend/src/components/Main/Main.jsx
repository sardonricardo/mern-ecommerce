
import React, {useState} from "react";
import ProductList from "../ProductList"
import ProductCard from "../ProductCard"
import { Router, Switch, Route } from 'react-router-dom';
/* import Cart from "../Cart"
 */
const Main = () => {

  const [searchItem, setSearchItem] = useState("")

  return <div>
          <div className="container-buttons">
              <button>Name</button>
              <button>Rating</button>
              <button>Price</button>
          </div>
          <div className="input-container">
              <input type="text" 
                placeholder="Search"
                onChange={(event) => {
                  setSearchItem(event.target.value); 
                }} />
          </div>
          <Switch>
                <Route path="/" component={ProductList} exact /> 
                <Route path="/product/:name" component={ProductCard} />    
                {/* <Route path="/cart" component={Cart} /> */}
                {/* <Route component={Error} /> */}
          </Switch>
  </div>;
};

export default Main;
