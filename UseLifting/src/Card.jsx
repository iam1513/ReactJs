import React from 'react'
import "./card.css"
const Card = (props) => {
    return (
        <div className='card'>
            <input type="text" onChange={(e) => {
                props.setName(e.target.value)
            }} />
            <p>Name state var value {props.title}: {props.name}</p>
        </div>
    )
}

export default Card