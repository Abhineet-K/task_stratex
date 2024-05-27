import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white">Movies</Link>
        <Link to="/favorites" className="text-white">Favorites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
