import React from 'react'
import { aboutus } from '../Date'
import shape5 from '../../images/shape5.png'
import person1 from '../../images/person1.png'
import person2 from '../../images/person2.png'
import './aboutUs.css'
const AboutUs = () => {
    return (
        <div className='aboutus-cont'>
            <img src={shape5} alt="" />
            <img src={person1} alt="" />
            <img src={person2} alt="" />
            <div>
                <h1 className='aboutus-title'>{aboutus.title}</h1>
                <p className='aboutus-content'>{aboutus.contetnt}</p>
                <button>Share Your Stories</button>
            </div>
        </div>
    )
}

export default AboutUs