import React, { useContext, useState, useEffect, useRef } from 'react';
import { userContext } from '../../context/useContext';
import ProductCard from '../ProductCard';
import Pagination from '../Pagination'
import axios from 'axios'; 


const ProductList = () => {

  const {newPosts, setNewPosts} = useContext(userContext); 

  console.log(newPosts)

  //Nuevo estado a mandar por context a App.js
  const [posts, setPosts] = useState([]); 
  //Lleno con el fetch de la base de datos. 
  const [loading, setLoading] = useState(false); 
  //Vacío para evitar la precarga. Estado del loader en el case de haberlo.  

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10); 
  //Estados para la paginación. 

  const [searchItem, setSearchItem] = useState("")
  //Para el buscador

  const [sortItem, setSortItem] = useState("")
  //Para el filtro

  const inputEl = useRef("") //valor vacío


  useEffect(() => {
    const fetchPosts =  async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:3002/api/items/');
      setNewPosts(res.data);
      setLoading(false)
    }

    fetchPosts(); 
  }, []);


  //Get current posts 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newPosts.slice(indexOfFirstPost, indexOfLastPost); 

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber); 


  const handelSearch = (e) => {
    setSearchItem(e.target.value)

    /* setSearchItem(event.target.value);  */
  }

  const handleSort = (e) => {
    console.log("puto", e)
    newPosts.sort((prev, next) => {
      console.log(prev)
      if (prev.list_title > next.list_title) {
        return 1
      } else if (prev.list_title < next.list_title) {
        return -1
      }
      return 0
    });
    setPosts(0);  //Para renderizar de nuevo el componente. 
  }

  const searchGame = () => {
    return newPosts.filter((val)=> {

      if (searchItem == "") {
        return val
      } else if (val.title.toLowerCase().includes(searchItem.toLowerCase())){
        return val
      }
    })
  }


/*  const paintCard = () => {
        
    return currentPosts.map((currentPost, i) =>  <ProductCard info={currentPost} key={i}  />)
} */

  return (
  <>
  <div className="container">

    <div className="input-container">
    <select onChange={handleSort} defaultValue="sort" >
      <option disabledValue="sort"></option>
      <option value="name">Name</option>
      <option value="rating">Rating</option>
      <option value="price">Price</option>
    </select>
      <input type="text" onChange={handelSearch} placeholder="Search..."/>
    </div>
    <div className="container-card"> {/*  Input de búsqueda */}

    {currentPosts.filter((val) => {
      if (searchItem == "") {
        return val
      } else if (val.list_title.toLowerCase().includes(searchItem.toLowerCase())) {
        return val
      }
    }).map((val, key) => {
      return (
        <ProductCard info={val} key={key}/>
      )
    })}
</div>
</div>

  <div className="container-card">

  {/* {paintCard()} */}{/*  Pintamos los datos obtenidos del fetch */}

     {/* <ProductCard info={posts}/>
 */}
  </div>
  <div>
    <Pagination postsPerPage={postsPerPage} totalPosts={newPosts.length} paginate={paginate} /> {/* Con esto hacemos la paginación */}
  </div>

{loading}

</>
  )};

export default ProductList;


 {/* Para el buscador de items */}
   
    {/* .map((val, key) => {
      return (
        <div key={key}>
          <h2>{val.title}</h2>
          <h4>{val.price}€</h4>
          <img src={val.productImage} width="100px"/></div>

      )
    })}
     */}

   {/*  */}