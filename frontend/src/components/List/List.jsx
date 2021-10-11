import React, { Component } from "react";


const List = (props) => { //Pasaremos los valores a la Weathercard via props. 

  




  console.log(props)
  return ( //Aquí renderizamos los datos. 
      <section>
          <div>
              <h2>{props.info[0].name}</h2>
          </div>
      </section>
  );
};


export default List;
