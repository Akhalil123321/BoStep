import React from 'react'
import { hero } from '../Date'
import image1 from '../../images/image1.png'
import './hero.css'
const Hero = () => {
    return (
        <div className='hero-cont'>
            <div>
                <h1 className='main-title'>{hero.title}</h1>
                <p className='main-content'>{hero.contetnt}</p>
                <div>
                    <button>Get Started Now</button>
                    <button>Request Demo</button>
                </div>
            </div>
            <div>
                <img src={image1} alt="" />
            </div>
        </div>
    )
}

export default Hero