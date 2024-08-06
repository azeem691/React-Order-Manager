import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RoundedIcon({ icon,size, bgColor, color }) {

    return (
        <div style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            backgroundColor: bgColor,
            color:color,
            margin: '0 5px',
        }}>
            <FontAwesomeIcon icon={icon} />
        </div>
    );
}

export default RoundedIcon;
