import React from "react";
import './Navbar.css'

function Navbar() {
  return (
    <div className="nav">
        <span className="heading">My website</span>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        </div>
  )
}

export default Navbar