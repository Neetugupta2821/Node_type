import { useRef, useState } from "react"

function Mycomponent(){
    const [count,setcount]=useState(0)
    const inputRef =useRef(null)
    const handonclick=()=>{
        inputRef.current.focus();
    }
    return(
        <>
        <input type="text" ref={inputRef}></input>
        <button onClick={handonclick}>click me</button>
        <p>{count}</p>
        <button onClick={()=>setcount(count+1)}>xc</button>
        </>
    )
}
export default Mycomponent