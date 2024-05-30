import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 py-6 px-4 justify-center ">
      <div className="container flex items-center justify-start gap-4">
        <Link to="/" className="text-white rounded-lg text-xl bg-sky-400 p-2">Movies</Link>
        <Link to="/favorites" className="text-white text-xl rounded-lg bg-sky-400 p-2">Favorites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
