import React from 'react';
import './Avatar.css';

function Avatar({
    size,
    src,
    type,
    alt
    }) {
    return (
        <div className={`avatar avatar-${size} avatar-${type}`}>
            <img src={src} alt={alt} />
        </div>  
    );
}

export default Avatar;