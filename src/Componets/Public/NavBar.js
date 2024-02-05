import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { useScroll } from '../Service/ScrollContext';

function NavBar() {

  const{ scrollToSection, section1Ref, section2Ref, section3Ref} = useScroll(); 

  const[isScrolled, setScrolled] = useState(false); 
  const onScroll = () => {
    if(window.scrollY > 10) { 
      setScrolled(true);
    } else { 
      setScrolled(false); 
    }
  };

  useEffect(() => { 

  window.addEventListener('scroll', onScroll); 

  return () => window.removeEventListener('scroll', onScroll);
  },[]);  

  return (
    <div className={`nav ${isScrolled ? 'nav-scrolled':''}`}>
      <div className='nav-container'> 
        <div className='nav-title'><img src='../../J.png' className='nav-webname' /></div>
      </div>
      <div className='nav-links-container'> 
        <div className='nav-links'>
          <div className='links' id='nav-about' onClick={() => scrollToSection(section1Ref)}>About</div>
          <div className='links' id='nav-work' onClick={() => scrollToSection(section2Ref)}>Work</div>
          <div className='links' id='nav-contact' onClick={() => scrollToSection(section3Ref)}>Contact</div>
        </div>
      </div>
    </div>
  )
}

export default NavBar