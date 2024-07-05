import React from 'react';

const BlobSvg = ({ fillColor }) => {
    return (
        <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <style>
                {`
          path:hover {
            fill: red;
          }
        `}
            </style>
            <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%"></stop>
                    <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%"></stop>
                </linearGradient>
            </defs>
            {/* Move the shape 1 cm to the left */}
            <path fill={fillColor} fillRule="evenodd" d="M22.6,11.4C16.9,22.8,-8.5,21.2,-15.6,9C-22.6,-3.2,-11.3,-26.1,1.4,-25.3C14.1,-24.5,28.2,0,22.6,11.4Z" width="100%" height="100%" transform="translate(45 50)" strokeWidth="0" style={{ transition: 'all 0.3s ease 0s' }}></path>
        </svg>
    );
};

export default BlobSvg;
