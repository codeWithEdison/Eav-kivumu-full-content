import React from 'react';
import { useEffect, useState } from 'react';

const Timer = () => { 
    const [count, setCount] = useState(0); 
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count) =>count +1);
        },1000 )
    },[count]);
  return (
    <h1>count: {count}</h1> 
  )
}

export default Timer