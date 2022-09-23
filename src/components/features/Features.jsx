import React from 'react'
import { features } from '../Date'
import shape2 from '../../images/shape2.png'
import shape3 from '../../images/shape3.png'
import './features.css'
const Features = () => {
    const cards = features.map(items=>{
        return(
            <div className='features-card'>
                <img src={items.img} alt="" />
                <h4>{items.title}</h4>
                <p>{items.content}</p>
            </div>
        )
    })
    return (
        <div className='features-cont'>
            <img src={shape2} alt="" className='features-shapes shape-left'/>
            <img src={shape3} alt="" className='features-shapes shape-right'/>
            {cards}
        </div>
    )
}

export default Features