/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { FaLinkedinIn, FaGlobeAmericas , FaGithub} from 'react-icons/fa';
import logo from '../../images/logo.png'
import shape6 from '../../images/shape6.png'
import './footer.css'
const Footer = () => {
    return (
        <div className='footer-cont'>
            <img src={shape6} alt="" className='footer-shape'/>
            <div className='footer-icons'>
                <div>
                    <a href="https://www.linkedin.com/in/ahmed-khalil8" target='_blank' title='Linkedin' ><FaLinkedinIn className='social-icons'/></a>
                    <a href="https://ahmed-khalil.netlify.app/" target='_blank' title='My site'><FaGlobeAmericas className='social-icons'/></a>
                    <a href="https://github.com/Akhalil123321" target='_blank' title='Github'><FaGithub className='social-icons'/></a>
                </div>
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

export default Footer