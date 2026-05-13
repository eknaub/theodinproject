import React from 'react';
import '../styles/card.css'

function Card(props) {
  const {
    card: { imgPath, title},
    handleGameLoop,
  } = props;

  return (
    <button
      onClick={handleGameLoop.bind(this, title)}
      id='card'
    >
      <figure id='cardContent'>
        <img src={imgPath} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </button>
  );
}

export default Card;