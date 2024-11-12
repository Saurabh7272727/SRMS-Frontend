import React from 'react'
import './Button.scss';
import { useNavigate } from 'react-router-dom';
const Button = ({ width, height, color, text, link }) => {
    const Navi = useNavigate();
    return (
        <div className="container_wrapper">
            <button style={{ width: width, height: height, color: color }} onClick={() => Navi(link)}>
                {text}
            </button>
        </div>

    )
}

export default Button;