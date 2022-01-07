import React,{useState} from "react";


function GroceryInput({func}){
    const [prod, setProd] = useState("");

    const changeHandler = (e)=>{
        let name = e.target.value;
        setProd(name)
    }
    console.log("rendering");
    const addToCart = ()=>{
     func(prod)
    }
    return (
        <div>
            <div> <input onChange={changeHandler} type="text" /></div>
           <div> <button onClick={addToCart}>Add to cart</button></div>
          
        </div>
    )
}

export default GroceryInput