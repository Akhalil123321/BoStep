import React from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { questions } from '../Date'
import './questions.css'
const Questions = () => {
const content1 = questions.list1.map(items => {
    return(
        <div className='question-box' key={items.key}>
            <h6>{items.title}</h6>
            <FaAngleDown className='arrow-down'/>
        </div>
    )
})
const content2 = questions.list2.map(items => {
    return(
        <div className='question-box' key={items.key}>
            <h6>{items.title}</h6>
            <FaAngleDown className='arrow-down'/>
        </div>
    )
})
    return (
        <div className='questions-cont'>
            <div>
            <h1 className='main-title black meduim'>{questions.title}</h1>
            <p className='main-content gray'>{questions.contetnt}</p>
            </div>
            <div>
                <div>
                    {content1}
                </div>
                <div>
                    {content2}
                </div>
            </div>
        </div>
    )
}

export default Questions