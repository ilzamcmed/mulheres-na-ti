import React from 'react';
import './SingleCard.css';

 
const SingleCard = ({ id, nome, description, url }) => {
    return (
        <article key={id}>
            <strong className="list__women-name">{nome}</strong>
            <p className="list__women-description">{description}</p>
            <a href={url} className="list__women-link">Veja mais</a>
        </article>
    )
}

export default SingleCard;