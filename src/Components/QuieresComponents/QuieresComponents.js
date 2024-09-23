import React, { useState } from 'react';
import "./QuieresComponents.css";

function QuieresComponents() {
  const [activeLink, setActiveLink] = useState('home'); // Default active link

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  const centeredContent = (
    <div className="centeredContent">
      {/* Content based on active link */}
      {activeLink === 'Active' && <div>Content for Activecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc</div>}
      {activeLink === 'Close' && <div>Content for Close</div>}
      {activeLink === 'Stared' && <div>Content for Stared</div>}
      {activeLink === 'All' && <div>Content for All</div>}
      {activeLink === 'blog' && <div>Content for Blog</div>}
    </div>
  );

  return (
    <div className='QuieresComponents'>
      <h2 style={{marginBottom:'30px'}}>Queries</h2>
      <nav className='QuieresComponentsNav' >
        <a href="#Active" style={{color:activeLink  == 'Active'?'blue':''}} onClick={() => handleNavLinkClick('Active')} className={activeLink === 'Active' ? 'active' : ''}>
          Active
        </a>
        <a href="#Close" style={{color:activeLink  == 'Close'?'blue':''}} onClick={() => handleNavLinkClick('Close')} className={activeLink === 'Close' ? 'active' : ''}>
          Close
        </a>
        <a href="#Stared" style={{color:activeLink  == 'Stared'?'blue':''}} onClick={() => handleNavLinkClick('Stared')} className={activeLink === 'Stared' ? 'active' : ''}>
          Stared
        </a>
        <a href="#All" style={{color:activeLink  == 'All'?'blue':''}} onClick={() => handleNavLinkClick('All')} className={activeLink === 'All' ? 'active' : ''}>
          All
        </a>
        <a href="#blog" style={{color:activeLink  == 'blog'?'blue':''}} onClick={() => handleNavLinkClick('blog')} className={activeLink === 'blog' ? 'active' : ''}>
          Blog
        </a>
      </nav>

      {/* Centered content container */}
      <div className="centeredContainer">
        {centeredContent}
      </div>
    </div>
  );
}

export default QuieresComponents;
