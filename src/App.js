
import React,{useState}from "react";
import Grocery from "./components/Grocery";

const App = ()=>{
    const [prod, setProd] = useState("")
    return (
        <div>
            <Grocery/>
        </div>
        
    )
}

export default App