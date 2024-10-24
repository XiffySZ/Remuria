// CharacterCard.jsx
import React from 'react';

const CharacterListCard = ({ image, tags }) => {
  return (
    <div className="charlist-card">
      <img src={image} alt="Character" className="character-image" />
    </div>
  );
};

export default CharacterListCard;
