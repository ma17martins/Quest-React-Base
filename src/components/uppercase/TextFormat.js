import React from "react";
import './uppercase.css';

const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const TextFormat = ({ text }) => {
    return (
        <div className="Text-Format">
            {text.split("").map((letra, index) => (
                <span
                    key={index}
                    style={{
                        color: generateRandomColor(),
                        textTransform: "uppercase",
                    }}
                >
                    {letra}
                </span>
            ))};
        </div>
    );
};

export default TextFormat;
