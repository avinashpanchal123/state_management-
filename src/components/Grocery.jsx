import React,{useState} from "react";

import GroceryInput from "./GroceryInput";

import GroceryList from "./GroceryList"

import {nanoid} from "nanoid"


const Grocery = ()=>{
    const [list, setList] = useState([])
    function dataTransfer(name){
        let payload = {
            title : name,
            status:false,
            id : nanoid(7)
        }
        let newList = [...list, payload]
        console.log(list);
        setList(newList)
    }

    const deleteItem = (data)=>{
      for (let i = 0; i < list.length; i++) {
        if( list[i].id == data){
           list[i].status = true;
           break;
        }
      }
    }
   return (
       <div>
           <GroceryInput func = {dataTransfer}/>
           {/* <div>{list[list.length-1]}</div> */}
           {list.map((item)=>(
            <GroceryList key={item.id} status = {item.status} id = {item.id} title={item.title}  func = {deleteItem}/>
           ))}
       </div>
   )
}

export default Grocery