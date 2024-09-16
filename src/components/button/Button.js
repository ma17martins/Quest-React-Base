import React from "react";
import './button.css';

const Button = ({ label }) => {
    const handleClick = () => {
        alert(`A label desse botão é ${label}`);
    };

    return (
        <button onClick={handleClick} className="Button">
            {label}
        </button>
    );
};

export default Button;