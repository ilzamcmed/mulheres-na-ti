import React from 'react';
import './Button.css'

const Button = ({disabled, onClick, acao }) => {
    return (
        <div>
            <button className="action__button" disabled={disabled} onClick={onClick}>{acao}</button>
        </div>

    )
}

export default Button;