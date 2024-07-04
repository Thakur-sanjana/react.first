import { useState } from "react";
const useStateExample=()=>{
    const intialState=10;
    const [count, setCount]=useState(intialState);
    return(
    <>
    <h2>(count)</h2>
    <button onClick={incrementHandler}>increment</button>
    </>
    )
};
export default useStateExample;