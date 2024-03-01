// Logo.js

import React from 'react';
import './Logo.css'; // Import your CSS file

const Logo = () => {
  return (
    <div className="logo">
      <h3 className="text-purple-700 text-4xl uppercase font-extrabold font-rye">Omni</h3>
      <div className='flex-col font-cabin'>
        <p className="text-gray-800 font-bold">Move</p>
        <p className="text-gray-800 font-bold">Express</p>
      </div>
    </div>
  );
}

export default Logo;
 