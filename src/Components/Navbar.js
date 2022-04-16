import React, { useEffect, useState } from 'react'
import "./Styles/Navbar.css"
import Logo from "../Assets/logo.jpg"

function Navbar() {
    const [show,handleShow] = useState(false);
    useEffect(() => {
        
        window.addEventListener("scroll", () =>{
            if(window.scrollY >600) {
                handleShow(true);
            }
            else handleShow(false);
        })
    }, [])
  return (
    <div className={ show ? 'navbar-container show' : 'navbar-container'}>
        <div className='navbar-hero'>
            <div>
                <img src={Logo} className="navbar-logo"/>
            </div>

            <div className='navbar-rightcon'>
                <a href='#'>Home</a>
                <a href='#'>About Us</a>
                <a href='#'>Products</a>
                <a href='#'>Careers</a>
                <a href='#'>Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar