import React from 'react';
import '../Sidebar.css';
import { FaHome, FaUserFriends, FaGem, FaListAlt, FaInfoCircle } from 'react-icons/fa';

const Sidebar = ({ setCurrentPage, isCollapsed }) => {
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <ul className="sidebar-list">
        <li className="sidebar-item" onClick={() => setCurrentPage('home')}>
          <FaHome className="icon" /> 
          {!isCollapsed && <span>Home</span>}
        </li>
        <li className="sidebar-item" onClick={() => setCurrentPage('characters')}>
          <FaUserFriends className="icon" /> 
          {!isCollapsed && <span>Characters</span>}
        </li>
        <li className="sidebar-item" onClick={() => setCurrentPage('artifacts')}>
          <FaGem className="icon" /> 
          {!isCollapsed && <span>Artifacts</span>}
        </li>
        <li className="sidebar-item" onClick={() => setCurrentPage('tierList')}>
          <FaListAlt className="icon" /> 
          {!isCollapsed && <span>Tier List</span>}
        </li>
        <li className="sidebar-item" onClick={() => setCurrentPage('about')}>
          <FaInfoCircle className="icon" /> 
          {!isCollapsed && <span>About</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
