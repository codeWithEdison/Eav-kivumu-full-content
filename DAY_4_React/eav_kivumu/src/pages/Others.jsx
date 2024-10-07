import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Others = () => {
  return (
    <>
   <nav>
    <ul>
       <li>
        <Link to='music'> MUSIC</Link> 
       </li>
       <li>
        <Link to= 'films'> Films</Link>  
       </li>
    </ul>
   </nav>
    <Outlet/> 
    </> 
  )
}

export default Others