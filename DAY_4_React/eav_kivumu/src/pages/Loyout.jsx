import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Loyout = ({children}) => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      {children} 

      <footer>
        © 2022 My Website
      </footer>
    </div>
  )
}

export default Loyout