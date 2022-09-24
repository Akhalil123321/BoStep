import React from 'react'
import { whyus } from '../Date'
import shape4 from '../../images/shape4.png'
import image2 from '../../images/image2.png'
import './whyus.css'
const Whyus = () => {
    return (
        <div className='whyus-cont'>
            <div>
                <img src={shape4} alt="" />
                <img src={image2} alt="" />
            </div>
            <div>
                <div className='line'></div>
                <h1 className='main-title black small'>{whyus.title}</h1>
                <p className='main-content gray'>{whyus.contetnt}</p>
            </div>
        </div>
    )
}

export default Whyus