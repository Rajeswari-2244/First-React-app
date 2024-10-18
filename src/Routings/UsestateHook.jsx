import React, { useState } from "react";
const UsestateHook = ()=>{
    const [count,setCount]=useState(0)
    const incrementor=()=>{
        setCount(count+1)
    }

    const decrementor=()=>{
        setCount((prevState)=>prevState-1)
    }
    return(
        <>

        <h1>count:{count}</h1>
        <button className="btn btn-primary me-3 "onClick={incrementor}>increment</button>
        <button className="btn btn-danger" onClick={decrementor}>decrement</button>
        
        </>
    )
}
export default UsestateHook