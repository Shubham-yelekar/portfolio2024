import React from 'react'
import { useTheme } from '../Theme-context'
import { useEffect, useState } from 'react'

const Github = () => {
  const {theme} = useTheme();
    const [fillColor, setFillColor] = useState('');

    const getCssVariableValue = (variable) => {
        return getComputedStyle(document.documentElement).getPropertyValue(variable);
    };

    useEffect(() => {
        const newFillColor = theme === 'dark'
        ? getCssVariableValue('--all-dark')
        : getCssVariableValue('--all-dark');
        setFillColor(newFillColor);
    }, [theme]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_72_828)">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.00596 0.615356C3.91908 0.615356 0.615234 3.94356 0.615234 8.061C0.615234 11.3523 2.73212 14.1383 5.66881 15.1243C6.03597 15.1985 6.17046 14.9641 6.17046 14.767C6.17046 14.5944 6.15835 14.0027 6.15835 13.3863C4.10243 13.8301 3.67431 12.4987 3.67431 12.4987C3.34391 11.6358 2.85436 11.414 2.85436 11.414C2.18146 10.9579 2.90337 10.9579 2.90337 10.9579C3.6498 11.0072 4.04147 11.7222 4.04147 11.7222C4.70212 12.8562 5.76669 12.5358 6.19496 12.3385C6.25608 11.8577 6.45199 11.5249 6.66001 11.34C5.02026 11.1674 3.29504 10.5264 3.29504 7.66645C3.29504 6.85286 3.58853 6.18722 4.05357 5.66953C3.9802 5.48467 3.72317 4.72024 4.12709 3.69712C4.12709 3.69712 4.75113 3.49985 6.1582 4.4614C6.76062 4.29841 7.38189 4.2155 8.00596 4.21481C8.63 4.21481 9.26614 4.30119 9.85357 4.4614C11.2608 3.49985 11.8848 3.69712 11.8848 3.69712C12.2888 4.72024 12.0316 5.48467 11.9582 5.66953C12.4355 6.18722 12.7169 6.85286 12.7169 7.66645C12.7169 10.5264 10.9917 11.155 9.33966 11.34C9.60894 11.5742 9.84131 12.0179 9.84131 12.7206C9.84131 13.7191 9.82921 14.5204 9.82921 14.7669C9.82921 14.9641 9.96385 15.1985 10.3309 15.1245C13.2675 14.1381 15.3844 11.3523 15.3844 8.061C15.3965 3.94356 12.0806 0.615356 8.00596 0.615356Z" fill={fillColor}/>
    </g>
    <defs>
    <clipPath id="clip0_72_828">
    <rect width="16" height="16" fill={fillColor}/>
    </clipPath>
    </defs>
    </svg>
  )
}

export default Github