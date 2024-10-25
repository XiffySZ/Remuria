import React, { useState } from 'react';
import CharacterListCard from './CharListCard';
import characterData from '../characters.json';
import '../styles.css';

const Characters = ({ isCollapsed }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [rarityFilter, setRarityFilter] = useState('all');
  const [elementFilter, setElementFilter] = useState('all');
  const [weaponFilter, setWeaponFilter] = useState('all');

  // Function to reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setRarityFilter('all');
    setElementFilter('all');
    setWeaponFilter('all');
  };

  // Function to handle search and filter
  const filteredCharacters = characterData.filter((character) => {
    const name = character.name || '';
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = rarityFilter === 'all' || character.rarity === rarityFilter;
    const matchesElement = elementFilter === 'all' || character.element === elementFilter;
    const matchesWeapon = weaponFilter === 'all' || character.weapon === weaponFilter;

    return matchesSearch && matchesRarity && matchesElement && matchesWeapon;
  });

  return (
    <div className="characters-container">
      <div className={`filters-container ${isCollapsed ? 'collapsed' : ''}`}>
        <input
          type="text"
          placeholder="Search characters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`search-bar ${isCollapsed ? '' : 'expanded'}`} // Conditionally apply class
        />
        {/* Filter options and reset button */}
        <div className="filter-box">
          {/* Rarity Filter */}
          <div className="filter-options">
            <div onClick={() => setRarityFilter('all')} className={`filter-option ${rarityFilter === 'all' ? 'active' : ''}`}>
            *
            </div>
            <div onClick={() => setRarityFilter('4*')} className={`filter-option ${rarityFilter === '4*' ? 'active' : ''}`} style={{ color: 'violet' }}>
              4★
            </div>
            <div onClick={() => setRarityFilter('5*')} className={`filter-option ${rarityFilter === '5*' ? 'active' : ''}`} style={{ color: 'gold' }}>
              5★
            </div>
          </div>
        </div>
        <div className="filter-box">
          {/* Element Filter */}
          <div className="filter-options">
            <div onClick={() => setElementFilter('all')} className={`filter-option ${elementFilter === 'all' ? 'active' : ''}`}>
            *
            </div>
            <div onClick={() => setElementFilter('Pyro')} className={`filter-option ${elementFilter === 'Pyro' ? 'active' : ''}`}>
            <img src="./images/elements/Pyro.png" alt="Pyro" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setElementFilter('Hydro')} className={`filter-option ${elementFilter === 'Hydro' ? 'active' : ''}`}>
            <img src="./images/elements/Hydro.png" alt="Hydro" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setElementFilter('Electro')} className={`filter-option ${elementFilter === 'Electro' ? 'active' : ''}`}>
            <img src="./images/elements/Electro.png" alt="Electro" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setElementFilter('Geo')} className={`filter-option ${elementFilter === 'Geo' ? 'active' : ''}`}>
            <img src="./images/elements/Geo.png" alt="Geo" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setElementFilter('Anemo')} className={`filter-option ${elementFilter === 'Anemo' ? 'active' : ''}`}>
            <img src="./images/elements/Anemo.png" alt="Anemo" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setElementFilter('Cryo')} className={`filter-option ${elementFilter === 'Cryo' ? 'active' : ''}`}>
            <img src="./images/elements/Cryo.png" alt="Cryo" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setElementFilter('Dendro')} className={`filter-option ${elementFilter === 'Dendro' ? 'active' : ''}`}>
            <img src="./images/elements/Dendro.png" alt="Dendro" style={{ width: '20px', height: 'auto' }} />
            </div>
          </div>
        </div>

        {/* Updated Weapon Filter Box */}
        <div className={`filter-box ${isCollapsed ? 'collapsed' : ''}`}>
          <div className={`filter-options ${isCollapsed ? 'space-between' : ''}`}>
            <div onClick={() => setWeaponFilter('all')} className={`filter-option ${weaponFilter === 'all' ? 'active' : ''}`}>
            *
            </div>
            <div onClick={() => setWeaponFilter('Claymore')} className={`filter-option ${weaponFilter === 'Claymore' ? 'active' : ''}`}>
            <img src="./images/weapons/claymore.png" alt="Claymore" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setWeaponFilter('Sword')} className={`filter-option ${weaponFilter === 'Sword' ? 'active' : ''}`}>
            <img src="./images/weapons/sword.png" alt="Sword" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setWeaponFilter('Catalyst')} className={`filter-option ${weaponFilter === 'Catalyst' ? 'active' : ''}`}>
            <img src="./images/weapons/catalyst.png" alt="Catalyst" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setWeaponFilter('Bow')} className={`filter-option ${weaponFilter === 'Bow' ? 'active' : ''}`}>
            <img src="./images/weapons/bow.png" alt="Bow" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setWeaponFilter('Polearm')} className={`filter-option ${weaponFilter === 'Polearm' ? 'active' : ''}`}>
              <img src="./images/weapons/polearm.png" alt="Polearm" style={{ width: '20px', height: 'auto' }} />
            </div>
          </div>
        </div>

        {/* Reset Button with dynamic text based on sidebar state */}
        <button onClick={resetFilters} className={`reset-button ${isCollapsed ? 'collapsed' : ''}`}>
          {isCollapsed ? 'Reset Filters' :'Reset' }
        </button>
      </div>

      <div className="character-list">
        {filteredCharacters.map((character, index) => (
          <CharacterListCard key={index} image={character.image} charname={[character.charname]} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
