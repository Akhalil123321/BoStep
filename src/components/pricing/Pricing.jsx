import React from 'react'
import { pricing } from '../Date'
import image1 from '../../images/image3.png'
import image2 from '../../images/image4.png'
import image3 from '../../images/image5.png'
import './pricing.css'
const Pricing = () => {
    return (
        <div className='pricing-cont'>
            <div>
                <div className='line'></div>
                <h1 className='main-title black small'>{pricing.title}</h1>
                <p className='main-content gray'>{pricing.contetnt}</p>
            </div>
            <div>
                <img src={image1} alt="" />
                <div>
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Pricing