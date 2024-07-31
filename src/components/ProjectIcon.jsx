import React from 'react'
import { useTheme } from '../Theme-context';
import { useState, useEffect } from 'react';


const ProjectIcon = () => {
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
    <path d="M21.06 11.8201L20.9 11.6001C20.62 11.2601 20.29 10.9901 19.91 10.7901C19.4 10.5001 18.82 10.3501 18.22 10.3501H5.77001C5.17001 10.3501 4.60001 10.5001 4.08001 10.7901C3.69001 11.0001 3.34001 11.2901 3.05001 11.6501C2.48001 12.3801 2.21001 13.2801 2.30001 14.1801L2.67001 18.8501C2.80001 20.2601 2.97001 22.0001 6.14001 22.0001H17.86C21.03 22.0001 21.19 20.2601 21.33 18.8401L21.7 14.1901C21.79 13.3501 21.57 12.5101 21.06 11.8201ZM14.39 17.3401H9.60001C9.21001 17.3401 8.90001 17.0201 8.90001 16.6401C8.90001 16.2601 9.21001 15.9401 9.60001 15.9401H14.39C14.78 15.9401 15.09 16.2601 15.09 16.6401C15.09 17.0301 14.78 17.3401 14.39 17.3401Z" fill={fillColor}/>
    <path d="M20.61 9.46C19.88 9.06 19.08 8.86 18.23 8.86H5.77C4.92 8.86 4.09 9.07 3.38 9.46V6.66C3.38 3.09 4.47 2 8.04 2H9.22001C10.65 2 11.1 2.46 11.68 3.21L12.88 4.81C13.13 5.15 13.14 5.17 13.58 5.17H15.96C19.41 5.17 20.54 6.19 20.61 9.46Z" fill={fillColor}/>
    </svg>

  )
}

export default ProjectIcon