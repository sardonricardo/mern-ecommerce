import { BrowserRouter } from 'react-router-dom';
import React, { useState } from "react";
import {userContext} from './context/useContext';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import ProductList from './components/ProductList';

import './style/styles.scss'
import ProductCard from './components/ProductCard';

function App() {

  const [newPosts, setNewPosts] = useState([]);  


  const dataPosts = {
    newPosts, setNewPosts
    
  } 

  return (
    <div className="App">
      <BrowserRouter>
      <userContext.Provider value={dataPosts} > 
        <Header/>
        <Main/>
      </userContext.Provider> 
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

