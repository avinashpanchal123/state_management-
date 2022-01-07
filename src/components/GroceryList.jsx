import React from "react";

const GroceryList = ({id,status, title, func}) => {

  
  return (
      <>
     {status== false && (
         <div>
              <div>{title}</div>
      <button onClick={()=>func(id)}>Delete item</button>
         </div>
     )}
      </>
  )
};

export default GroceryList;
