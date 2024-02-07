import React from 'react'
import "./Card.css"

const Card = ({title, description, imgUrl}) => {

  return (
    <div className='card'>
      <div className='card-project-title'>{title}</div>
      <div className='card-container'>
        <div className='card-text-container'>
          {description}
        </div>
        <img src={imgUrl} alt='logo'/>
      </div>
    </div>
  )
}

export default Card