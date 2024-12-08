import React from 'react';

const CharacterCard = ({ image, tags }) => {
  return (
    <div className="character-card">
      {/* Character Image */}
      <img src={image} alt="Character" className="character-image" />

      {/* Tags */}
      <div className="character-tags">
        {tags && tags.map((tag, index) => (
          <span key={index} className={`character-tag tag-${tag.toLowerCase()}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CharacterCard;
