import React, { useState } from 'react';
import './styles.css';
import TierList from './components/TierList';
import Home from './components/Home';
import Characters from './components/Characters';
import Artifacts from './components/Artifacts';
import About from './components/About';
import Sidebar from './components/Sidebar';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'characters':
        return <Characters isCollapsed={isCollapsed} />; // Pass isCollapsed to Characters
      case 'artifacts':
        return <Artifacts />;
      case 'tierList':
        return <TierList />;
      case 'about':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Sidebar 
        setCurrentPage={setCurrentPage} 
        isCollapsed={isCollapsed}  // Pass isCollapsed to Sidebar
        setIsCollapsed={setIsCollapsed} // Pass setIsCollapsed to Sidebar
      />
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
