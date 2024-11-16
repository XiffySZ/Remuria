import React from 'react';

const CharacterCard = ({ image, overlayImage, tags }) => {
  return (
    <div className="character-card">
      {/* Character Image */}
      <img src={image} alt="Character" className="character-image" />

      {/* Overlay Image */}
      {overlayImage && (
        <img
          src={overlayImage}
          alt="Overlay"
          className="overlay-image"
        />
      )}

      {/* Tags or other info */}
      <div className="character-tags">
        {tags && tags.map((tag, index) => (
          <span key={index} className="character-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default CharacterCard;
