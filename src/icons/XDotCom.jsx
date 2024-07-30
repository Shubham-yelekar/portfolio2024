import React from 'react'
import { useTheme } from '../Theme-context'

const xDotCom = () => {
  const {theme} = useTheme();
  const fillColor = theme === 'dark' ? '#ffffff':'#000000';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_72_461)">
    <g filter="url(#filter0_d_72_461)">
    <path d="M12.2178 1.26929H14.4668L9.55347 6.88495L15.3337 14.5266H10.8078L7.26302 9.89198L3.20696 14.5266H0.956613L6.21195 8.52002L0.666992 1.26929H5.30773L8.51192 5.50551L12.2178 1.26929ZM11.4285 13.1805H12.6747L4.63059 2.54471H3.2933L11.4285 13.1805Z" fill={fillColor}/>
    </g>
    </g>
    <defs>
    <filter id="filter0_d_72_461" x="-3.33301" y="1.26929" width="22.667" height="21.2573" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_72_461"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_72_461" result="shape"/>
    </filter>
    <clipPath id="clip0_72_461">
    <rect width="16" height="16" fill={fillColor}/>
    </clipPath>
    </defs>
    </svg>
  )
}

export default xDotCom