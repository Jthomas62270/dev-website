import React, { useEffect, useState } from 'react'
import './NavBar.css'

function NavBar() {

  const[isScrolled, setScrolled] = useState(false); 
  const[isBottom, setBottom] = useState(false); 
  const onScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const totalHeight = document.body.scrollHeight;

    if(window.scrollY > 10) { 
      setScrolled(true);
    } else { 
      setScrolled(false); 
    }
    if (windowHeight + scrollPosition >= totalHeight) {
      setBottom(true);
    } else {
      setBottom(false);
    }
  };

  useEffect(() => { 

  window.addEventListener('scroll', onScroll); 

  return () => window.removeEventListener('scroll', onScroll);
  },[]);  

  const aboutClick = () => {

  }

  const workClick = () => {

  }

  const contactClick = () => {

  }

  return (
    <div className={`nav ${isScrolled ? 'nav-scrolled':''}`}>
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