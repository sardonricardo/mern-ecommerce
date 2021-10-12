import React, {useState} from "react";
import { Link } from "react-router-dom"

const Card = (props) => {



  const [searchItem, setSearchItem] = useState("")

  console.log(props)

  return (
  

  <div className="container-card">
  
  {props.info.filter((val)=> {
    if (searchItem == "") {
      return val
    } else if (val.title.toLowerCase().includes(searchItem.toLowerCase())){
      return val
    }
  }).map((val, key) => {
    return (
      <div key={key} className="container-info">
        <h3>{val.title}</h3>
        <div>
          <img src={val.productImage} />
        </div>
        <h4>{val.price}€</h4>
        
        <Link to={`/products/${val._id}`} className="info_button">
          View
        </Link>
        </div>

    )
  })}
  </div>
  

  
  )
  
  
  {/* <div>
 
 {props.info.map(currentPost => (
   <div key={currentPost.id}>
     <h2>{currentPost.title}</h2>
     <h4>{currentPost.price}€</h4>
     <img src={currentPost.productImage} width="100px"/></div>
 ))} 

</div> */}
  
 }
export default Card;
