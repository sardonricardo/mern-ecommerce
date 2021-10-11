import React, { useEffect, useState } from 'react';
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


  useEffect(() => {
    const fetchPosts =  async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:3002/api/products/');
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
  {currentPosts.map(currentPost => (
    <div key={currentPost.id}>
      <h2>{currentPost.title}</h2>
      <h4>{currentPost.price}€</h4>
      <img src={currentPost.productImage} width="100px"/></div>
  ))}

  <div>
    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
  </div>



</div>;


};

export default ProductList;

