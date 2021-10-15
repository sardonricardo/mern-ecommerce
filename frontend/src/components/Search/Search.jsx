
import React, {useState} from "react";



const Search = () => {




  const [searchItem, setSearchItem] = useState("") 

  return <div>
    <div className="input-container"> {/*  Input de búsqueda */}
  <input type="text" 
    placeholder="Search"
    onChange={(event) => {
      setSearchItem(event.target.value); 
    }} />
</div></div>;
}

export default Search;
