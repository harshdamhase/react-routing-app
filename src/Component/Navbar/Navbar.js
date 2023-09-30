import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div className="nav">
        <span className="heading">My website</span>
        <Link to="/" className="active">Home</Link>
        <Link to="/about" className="active">About</Link>
        <Link to="/contact" className="active">Contact</Link>
        </div>
  )
}

export default Navbar