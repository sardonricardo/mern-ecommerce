import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import List from '../List'


const ProductList = () => {

  const [inputValue, setValue] = useState([]);
 /*  const [previous, setPrevious] = useState(""); //Vacío para evitar la precarga.  */
  const [posts, setPosts] = useState([]);


  useEffect(

    async () => {

      try {
        console.log(inputValue)

        if (inputValue){
            const resp = await axios.get('http://localhost:3002/api/products/'
      );
      
      const data = await resp.data;
      console.log(data)
      setPosts(...posts, data)

      }
      } catch(error) {

        console.log(error)
        setPosts([]); 

      }
    },
    [inputValue]
  );



  return <div>
     {posts.map(post => (
       <div key={post.id}>
         <h2>{post.name}</h2>
         <h4>{post.price}€</h4></div>
     ))}
  </div>;
};

export default ProductList;
