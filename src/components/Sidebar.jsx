import React, { useState } from 'react';
import '../Sidebar.css'; // Ensure you have appropriate styles
import { FaHome, FaUserFriends, FaGem, FaListAlt, FaInfoCircle } from 'react-icons/fa'; // Import the icons you want to use

const Sidebar = ({ setCurrentPage }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="collapse-btn" onClick={toggleSidebar}>
        {isCollapsed ? '>' : '<'}
      </button>
      <ul className="sidebar-list">
        <li className="sidebar-item" onClick={() => setCurrentPage('home')}>
          <FaHome /> {/* Add icon for Home */}
          <span>Home</span> {/* Text that will be hidden when collapsed */}
        </li>
        <li className="sidebar-item" onClick={() => setCurrentPage('characters')}>
          <FaUserFriends /> {/* Add icon for Characters */}
          <span>Characters</span>
        </li>
        <li className="sidebar-item" onClick={() => setCurrentPage('artifacts')}>
          <FaGem /> {/* Add icon for Artifacts */}
          <span>Artifacts</span>
        </li>
        <li className="sidebar-item" onClick={() => setCurrentPage('tierList')}>
          <FaListAlt /> {/* Add icon for Tier List */}
          <span>Tier List</span>
        </li>
        <li className="sidebar-item" onClick={() => setCurrentPage('about')}>
          <FaInfoCircle /> {/* Add icon for About */}
          <span>About</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
