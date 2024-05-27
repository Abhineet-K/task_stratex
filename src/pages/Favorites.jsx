import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {favorites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Favorites;
