import React from 'react';

const Button = ({ children, onClick, className, ...props }) => {
    return (
        <button className={`rounded-lg px-6 py-3 ${className}`} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
