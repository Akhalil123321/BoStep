import React from 'react'
import shape1 from '../../images/shape1.png'
import logo from '../../images/logo.png'
import './navBar.css'
const NavBar = () => {
    return (
        <header className='nav-cont'>
            <img src={shape1} className='shape1' alt="" />
            <div className='nav-bar'>
                <img src={logo} alt="" className='Nav-logo'/>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>pricing</li>
                    <li>About Us</li>
                </ul>
                <ul>
                    <li>Login</li>
                    <li>Register</li>
                </ul>
            </div>
        </header>
    )
}

export default NavBar