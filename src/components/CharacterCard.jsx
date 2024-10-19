// CharacterCard.jsx
import React from 'react';

const CharacterCard = ({ image, tags }) => {
  return (
    <div className="character-card">
      <img src={image} alt="Character" className="character-image" />
      {tags && tags.length > 0 && (
        <ul className="tags">
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CharacterCard;
