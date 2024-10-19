import React from 'react';
//import './CharacterCard.css';

const CharacterCard = ({ image }) => {
  return (
    <div className="character-list">
    <div className="character-card">
      <img src={image} alt="Character" className="character-image" />
    </div>
    </div>
  );
};

export default CharacterCard;
