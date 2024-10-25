// CharacterCard.jsx
import React from 'react';

const CharacterListCard = ({ image, charname }) => {
  return (
    <div className="charlist-card">
      <img src={image} alt={charname} className="character-image" />
      <div className="charlist-overlay">
        <span className="charlist-text">{charname}</span>
      </div>
    </div>
  );
};

export default CharacterListCard;
