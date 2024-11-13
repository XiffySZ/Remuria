import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import characterData from '../chartier.json';
import '../styles.css';

const TierList = () => {
  const [tierData, setTierData] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [scale, setScale] = useState(1); // Correctly named state and setter

  useEffect(() => {
    setTierData(characterData);

    // Listener to detect zoom level and adjust scale
    const handleZoom = () => {
      const zoomLevel = window.devicePixelRatio;
      setScale(1 / zoomLevel); // Adjust scale to counteract zoom
    };

    window.addEventListener('resize', handleZoom);
    handleZoom(); // Initialize scale on component mount

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleZoom);
  }, []); // Empty dependency array to ensure this runs once after mount

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Tier List Info Section */}
      <div className="tier-list-info">
        <div className="tier-list-heading" onClick={toggleCollapse}>
          <h3>Tier List Overview</h3>
          <span className={`collapse-icon ${isCollapsed ? 'down' : 'up'}`}>&#9660;</span>
        </div>
        {!isCollapsed && (
          <div className="tier-list-expanded-content">
            <p>About the tier list: This tier list ranks characters based on their abilities, stats, and other factors...</p>
          </div>
        )}
      </div>

      {/* Tier List Grid Section with dynamic scale */}
      <div className={`tier-list-grid fixed-scale scale-${scale}`}>
        <div className="grid-header"></div>
        <div className="grid-header main-dps-header">MAIN DPS</div>
        <div className="grid-header sub-dps-header">SUB DPS</div>
        <div className="grid-header amplifiers-header">SUPPORT</div>
        <div className="grid-header sustain-header">SUSTAIN</div>

        {/* Tier rows */}
        {tierData.map((tier, index) => (
          <React.Fragment key={index}>
            <div className={`grid-tier tier-heading tier-${tier.tier.replace('.', '_')}`}>{tier.tier}</div>

            <div className="grid-cell main-dps">
              {tier.mainDPS.map((character, charIndex) => (
                <CharacterCard key={charIndex} image={character.image} tags={character.tags} />
              ))}
            </div>

            <div className="grid-cell sub-dps">
              {tier.subDPS.map((character, charIndex) => (
                <CharacterCard key={charIndex} image={character.image} tags={character.tags} />
              ))}
            </div>

            <div className="grid-cell amplifiers">
              {tier.amplifiers.map((character, charIndex) => (
                <CharacterCard key={charIndex} image={character.image} tags={character.tags} />
              ))}
            </div>

            <div className="grid-cell sustain">
              {tier.sustain.map((character, charIndex) => (
                <CharacterCard key={charIndex} image={character.image} tags={character.tags} />
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default TierList;
