import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="app-background shadow-md text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-700">Terrain Builder</h1>
      </div>
    </header>
  );
};

export default Header;
