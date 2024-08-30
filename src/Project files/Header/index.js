import React from 'react'
import '../CSS files/Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
    <div className='Container' style={{textShadow:'1px 1px black'}}>
        <div className='heading'>
      <h3 style={{fontSize:"25px" }}>Little Tots</h3>
        <h1 style={{fontSize:"50px"}}>Preschool</h1>
        </div>
        <nav>
            <ul>
                <li><Link to="/home" style={{textDecoration:"none", color:"red"}}>Home</Link></li>
                <li><Link to="/aboutUs"  style={{textDecoration:"none", color:"red"}}>About us</Link></li>
                <li><Link to="/programs"  style={{textDecoration:"none", color:"red"}}>Programs</Link></li>
                <li><Link  to="/staff" style={{textDecoration:"none", color:"red"}}>Staff</Link></li>
                <li><Link to="/news&events"  style={{textDecoration:"none", color:"red"}}>News & Events</Link></li>
                <li><Link  to="/contact" style={{textDecoration:"none", color:"red"}}>Contact</Link></li>
            </ul>
        </nav>
    </div>

    </div>
  )
}

export default Header