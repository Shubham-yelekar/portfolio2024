import React from 'react'
import { useTheme } from '../Theme-context';
import { useState, useEffect } from 'react';
import { transform } from 'framer-motion';

const MyIcon = () => {
    const {theme} = useTheme();
    const [fillColor, setFillColor] = useState('');

    const getCssVariableValue = (variable) => {
        return getComputedStyle(document.documentElement).getPropertyValue(variable);
    };

    useEffect(() => {
        const newFillColor = theme === 'dark'
        ? getCssVariableValue('--nav-icon-color')
        : getCssVariableValue('--nav-icon-color');
        setFillColor(newFillColor);
    }, [theme]);
  return (
    <div className='w-[24px] h-[24] scale-125'>
        <svg width="24" height="11" viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6955 8.36029L16.571 10.3926C16.3369 10.6166 16.5024 11 16.8332 11H20.0898C20.1881 11 20.2824 10.9626 20.352 10.8961L22.4764 8.86373C22.7105 8.63977 22.545 8.25635 22.2143 8.25635H18.9576C18.8593 8.25635 18.765 8.29373 18.6955 8.36029Z" fill={fillColor}/>
        <path d="M20.3838 0C20.2854 0 20.191 0.0374713 20.1214 0.10417L17.6286 2.49333C17.4842 2.63176 17.2502 2.63229 17.1051 2.49449L14.6133 0.128407C14.5438 0.0624225 14.4499 0.0254042 14.3521 0.0254042H10.2109H6.0706C5.97218 0.0254042 5.8778 0.0628752 5.8082 0.129574L0.109431 5.59147C-0.124338 5.81552 0.0412279 6.19861 0.371827 6.19861H3.6162C3.71462 6.19861 3.80901 6.16114 3.8786 6.09444L10.2109 0.0254042L14.9566 4.54997C15.1022 4.68875 15.1025 4.91445 14.9573 5.05361L9.41301 10.3674C9.17924 10.5915 9.34481 10.9746 9.6754 10.9746H12.9198C13.0182 10.9746 13.1126 10.9371 13.1822 10.8704L23.8906 0.607147C24.1243 0.383094 23.9588 0 23.6282 0H20.3838Z" fill={fillColor}/>
        <path d="M2.51934 11C2.18866 11 2.02313 10.6168 2.25705 10.3927L7.88102 5.00707C7.9506 4.94043 8.04494 4.903 8.1433 4.903H11.3819C11.7126 4.903 11.8781 5.28624 11.6442 5.51025L6.02023 10.8959C5.95064 10.9626 5.85631 11 5.75794 11H2.51934Z" fill={fillColor}/>
        </svg>

    </div>
  )
}

export default MyIcon