// CharacterCard.jsx
import React from 'react';

const CharacterCard = ({ image, tags }) => {
  return (
    <div className="character-card">
      <img src={image} alt="Character" className="character-image" />
    </div>
  );
};

export default CharacterCard;
