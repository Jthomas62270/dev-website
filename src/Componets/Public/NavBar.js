import React from 'react'
import './NavBar.css'

function NavBar() {

  const aboutClick = () => {

  }

  const workClick = () => {

  }

  const contactClick = () => {

  }

  return (
    <div className='nav'>
      <div className='nav-container'> 
        <div className='nav-title'><div className='nav-webname'>John Garcia</div></div>
      </div>
      <div className='nav-links-container'> 
        <div className='nav-links'>
          <div className='links' id='nav-about' onClick={aboutClick}>About</div>
          <div className='links' id='nav-work' onClick={workClick}>Work</div>
          <div className='links' id='nav-contact' onClick={contactClick}>Contact</div>
        </div>
      </div>
    </div>
  )
}

export default NavBar