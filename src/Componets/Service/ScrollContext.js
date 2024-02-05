import React, {createContext, useContext, useRef} from 'react'

const ScrollContext = createContext(); 

export const useScroll = () => useContext(ScrollContext); 


export const ScrollProvider = ({children}) => {
    const section1Ref = useRef(null); 
    const section2Ref = useRef(null); 
    const section3Ref = useRef(null); 

    const scrollToSection = (sectionRef) => { 
        window.scrollTo({
            top: sectionRef.current.offsetTop, 
            behavior: 'smooth', 
        }); 
    }; 

    return(
        <ScrollContext.Provider value={{scrollToSection, section1Ref, section2Ref, section3Ref}}>
            {children}
        </ScrollContext.Provider>
    )
}