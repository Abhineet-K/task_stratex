import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/favoritesSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.find((fav) => fav.id === movie.id);

  const handleFavorite = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(movie));
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start cursor-pointer"
      onClick={() => window.open(movie.imdb_url, "_blank")}
    >
      <img src={movie.image} alt={movie.movie} className="w-full h-64 object-cover rounded-lg" />
      <div className='flex items-center justify-between px-3 w-full'>
        <div>
          <h2 className="mt-4 text-lg font-semibold">{movie.movie}</h2>
          <p>Rating: {movie.rating}</p>
        </div>
        <div >
          <button
            onClick={handleFavorite}
            className="mt-2 text-red-600 text-2xl"
          >
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
