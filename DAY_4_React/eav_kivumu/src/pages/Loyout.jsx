import React from 'react'
import { Link} from 'react-router-dom'

const Loyout = ({children}) => {
  return (
    <div className=' w-full  min-h-screen flex  flex-col items-center ' >    
      <nav className='   w-full  flex justify-evenly  py-2 shadow-md shadow-blue-400  bg-red ' >   
        <Link to="/"  className=' heading   hover:text-black '>Home</Link>
        <Link to="/blog" className=' heading   '>Blog</Link>  
        <Link to="/contact"  className=' heading   '>Contact</Link>
        <Link to="/other"  className=' heading   '>other</Link>
        <Link to="/login"  className=' heading   ' >Login</Link> 


      </nav>
      {children} 

      <footer>
        © 2022 My Website
      </footer>
    </div>
  )
}

export default Loyout