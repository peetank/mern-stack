import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contacts">Contact</Link>
    </>
  )
}

export default Navbar