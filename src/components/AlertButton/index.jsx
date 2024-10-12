import React from "react";
import '../AlertButton/index.css';

const Button = ({ label }) => {

    return (
        <button onClick={()=> alert(`A label desse botão é ${label}`)} className="Button">
        {label}
            </button>
    );
};

export default Button;