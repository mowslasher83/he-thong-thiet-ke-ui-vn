import React from 'react';

const Button = ({ label, onClick, style }) => {
    return (
        <button onClick={onClick} style={style} className='ui-button'>
            {label}
        </button>
    );
};

export default Button;