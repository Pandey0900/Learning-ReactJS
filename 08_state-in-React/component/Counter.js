import { useState } from "react"

 const Counter = () => {
 const [count,setCount]= useState(0);
 console.log("Rendering");
 console.log(count)
  return (
    <div style={{textAlign:'center'}}>
     <h1>{count}</h1>
     <button 
     onClick={()=>{  
      setCount(count +1);
     }}
     >
      Increase Count
      </button>   
    </div>
  )
}
export default Counter