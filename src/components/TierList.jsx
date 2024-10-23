import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import characterData from '../chartier.json'; // Import the JSON data

const TierList = () => {
  const [tierData, setTierData] = useState([]);

  useEffect(() => {
    // Set the tier data from the imported JSON
    setTierData(characterData);
    console.log(characterData); // Debug: Check the loaded data
  }, []);

  return (
    <div className="tier-list-grid">
      {/* Column Headings */}
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
  );
};

export default TierList;
