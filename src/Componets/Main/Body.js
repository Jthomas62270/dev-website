import React from 'react'
import "./Body.css"

function Body() {
  return (
    <div className='body'>
        <div className='body-container'>
            <img src="../../portrait.jpg" className="body-portrait"alt="Portrait" />
            <div className='body-text-container'>
                <h1 className='body-text-header'>Hello, World!</h1>
                <p className='body-text-p'>I am John Garcia. Software Developer. Computer Scientist. Designer. Creator. I live in Boston, MA. and am looking to work for a team to help create the next big thing. </p>
            </div>
        </div>
    </div>
  )
}

export default Body