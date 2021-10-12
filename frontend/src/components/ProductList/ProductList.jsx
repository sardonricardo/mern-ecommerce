import React, { useContext, useState, useEffect } from 'react';
import Card from '../Card';
import axios from 'axios'; 
import List from '../List';
import ReactPaginate from "react-paginate"; 
import Pagination from "../Pagination"




const ProductList = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false); //Vacío para evitar la precarga.  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10); 
  const [searchItem, setSearchItem] = useState("") //Para el buscador

  useEffect(() => {
    const fetchPosts =  async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:3002/api/items/');
      setPosts(res.data);
      console.log(res.data)
      setLoading(false)
    }

    fetchPosts(); 
  }, []);


  //Get current posts 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); 

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber); 

  return <div className="container-list">

 {/* Para el buscador de items */}
   
    {/* {currentPosts.filter((val)=> {
      if (searchItem == "") {
        return val
      } else if (val.title.toLowerCase().includes(searchItem.toLowerCase())){
        return val
      }
    }).map((val, key) => {
      return (
        <div key={key}>
          <h2>{val.title}</h2>
          <h4>{val.price}€</h4>
          <img src={val.productImage} width="100px"/></div>

      )
    })}
     */}

    <Card info={currentPosts} />
    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />



</div>;


};

export default ProductList;

