import React from 'react'
import { useTheme } from '../Theme-context';
import { useState, useEffect } from 'react';

const ArchiveIcons = () => {
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
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.33 5.67979L13.06 2.29979C12.4 1.93979 11.6 1.93979 10.94 2.29979L4.66999 5.67979C4.20999 5.92979 3.92999 6.40979 3.92999 6.95979C3.92999 7.49979 4.20999 7.98979 4.66999 8.23979L10.94 11.6198C11.27 11.7998 11.64 11.8898 12 11.8898C12.36 11.8898 12.73 11.7998 13.06 11.6198L19.33 8.23979C19.79 7.98979 20.07 7.50979 20.07 6.95979C20.07 6.40979 19.79 5.92979 19.33 5.67979Z" fill={fillColor}/>
    <path d="M9.91 12.79L4.07 9.87C3.62 9.65 3.1 9.67 2.68 9.93C2.25 10.2 2 10.65 2 11.15V16.66C2 17.61 2.53 18.47 3.38 18.9L9.21 21.82C9.41 21.92 9.63 21.97 9.85 21.97C10.11 21.97 10.37 21.9 10.6 21.76C11.03 21.5 11.28 21.04 11.28 20.54V15.03C11.29 14.07 10.76 13.21 9.91 12.79Z" fill={fillColor}/>
    <path d="M21.32 9.93014C20.89 9.67014 20.37 9.64014 19.93 9.87014L14.1 12.7901C13.25 13.2201 12.72 14.0701 12.72 15.0301V20.5401C12.72 21.0401 12.97 21.5001 13.4 21.7601C13.63 21.9001 13.89 21.9701 14.15 21.9701C14.37 21.9701 14.59 21.9201 14.79 21.8201L20.62 18.9001C21.47 18.4701 22 17.6201 22 16.6601V11.1501C22 10.6501 21.75 10.2001 21.32 9.93014Z" fill={fillColor}/>
    </svg>

  )
}

export default ArchiveIcons