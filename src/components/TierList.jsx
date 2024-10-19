import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import characterData from '../characters.json'; // Import the JSON data

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
      <div className="grid-header"></div> {/* Empty top-left corner */}
      <div className="grid-header main-dps-header">MAIN DPS</div>
      <div className="grid-header sub-dps-header">SUB DPS</div>
      <div className="grid-header amplifiers-header">SUPPORT</div> {/* Changed Support to Amplifiers */}
      <div className="grid-header sustain-header">SUSTAIN</div> {/* Changed Specialist to Sustain */}

      {/* Tier rows */}
      {tierData.map((tier, index) => (
        <React.Fragment key={index}>
          {/* Tier heading with specific color class */}
          <div className={`grid-tier tier-heading tier-${tier.tier.replace('.', '_')}`}>{tier.tier}</div>

          {/* Main DPS */}
          <div className="grid-cell main-dps">
            {tier.mainDPS.map((character, charIndex) => (
              <CharacterCard key={charIndex} image={character.image} />
            ))}
          </div>

          {/* Sub DPS */}
          <div className="grid-cell sub-dps">
            {tier.subDPS.map((character, charIndex) => (
              <CharacterCard key={charIndex} image={character.image} />
            ))}
          </div>

          {/* Amplifiers */}
          <div className="grid-cell amplifiers">
            {tier.amplifiers.map((character, charIndex) => (
              <CharacterCard key={charIndex} image={character.image} />
            ))}
          </div>

          {/* Sustain */}
          <div className="grid-cell sustain">
            {tier.sustain.map((character, charIndex) => (
              <CharacterCard key={charIndex} image={character.image} />
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TierList;
