import React from 'react'
import { useTheme } from '../Theme-context';
import { useState, useEffect } from 'react';

const ArrowLeft = () => {
    const {theme} = useTheme();
    const [fillColor, setFillColor] = useState('');

    const getCssVariableValue = (variable) => {
        return getComputedStyle(document.documentElement).getPropertyValue(variable);
    };

    useEffect(() => {
        const newFillColor = theme === 'dark'
        ? getCssVariableValue('--text-color')
        : getCssVariableValue('--text-color');
        setFillColor(newFillColor);
    }, [theme]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 1024 1024"><path fill={fillColor} d="M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.59 30.59 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.59 30.59 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0"/></svg>
  )
}

export default ArrowLeft