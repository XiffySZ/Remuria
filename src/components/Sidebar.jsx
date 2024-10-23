import React from 'react';
import '../Sidebar.css'; 
import { FaHome, FaUserFriends, FaGem, FaListAlt, FaInfoCircle } from 'react-icons/fa';

const Sidebar = ({ setCurrentPage, isCollapsed, setIsCollapsed }) => {
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
          <FaHome /> <span>Home</span>
        </li>
        <li className="sidebar-item" onClick={() => setCurrentPage('characters')}>
          <FaUserFriends /> <span>Characters</span>
        </li>
        <li className="sidebar-item" onClick={() => setCurrentPage('artifacts')}>
          <FaGem /> <span>Artifacts</span>
        </li>
        <li className="sidebar-item" onClick={() => setCurrentPage('tierList')}>
          <FaListAlt /> <span>Tier List</span>
        </li>
        <li className="sidebar-item" onClick={() => setCurrentPage('about')}>
          <FaInfoCircle /> <span>About</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
