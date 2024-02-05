import React from 'react'
import { useScroll } from '../Service/ScrollContext';
import "./Body.css"


function Body() {

    const {section1Ref, section2Ref, section3Ref} = useScroll(); 

    const emailAddress = "jthomas62270@gmail.com"; 

    const gitClicked = () => { 
        const git = "https://github.com/Jthomas62270";
        window.open(git, '_blank'); 
    }

    const linkClicked = () => {
        const link = "https://www.linkedin.com/in/john-garcia-238ab1253/"
        window.open(link, '_blank'); 
    }
    
    const mailClicked = () => { 
        const mailto = `mailto:${emailAddress}`; 
        window.location.href = mailto;
    }

  return (
    <div className='body'>
        <div className='body-container'>
            <img src="../../portrait.jpg" className="body-portrait"alt="Portrait" />
            <div className='body-text-container'>
                <h1 className='body-text-header'>Hello, World!</h1>
                <p className='body-text-p'>I am John Garcia. Software Developer. Computer Scientist. Designer. Creator. I live in Boston, MA. 
                and am looking to work with a team to help create the next big thing. Experienced in Frontend and Backend Code Development, </p>
            </div>
        </div>
        <div className='body-socials-container' ref={section1Ref}>
            <div className='body-linkedin-links' onClick={linkClicked}>
                <div className='body-linkedin-button'>
                    <img src="../../In-Blue-72@2x.png" className='body-linkedin-logo' alt="linkedin"/>
                    <div className='body-linkedin-text'>Linkedin Account</div>
                </div>
            </div>
            <div className='body-github-links' onClick={gitClicked}>
                <div className='body-github-button' id="body-github-button">
                    <img src="../../github.svg" className='body-github-logo' alt="github"/>
                    <div className='body-github-text'>GitHub Account</div>
                </div>
            </div>
            <div className='body-gmail-links' onClick={mailClicked}>
                <div className='body-gmail-button' id="body-gmail-button">
                    <img src="../../Gmail_icon_(2020).png" className="body-gmail-logo" alt="gmail"/>
                    <div className='body-gmail-text'>Gmail Account</div>
                </div>
            </div>
        </div>
        <div className='body-related-skills-container'>
            <div className='about-conatiner'> 
            <div className='about-me-title'>
                More About Me!
            </div>
            </div>
        </div>
    </div>
  )
}

export default Body