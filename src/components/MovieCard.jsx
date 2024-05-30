import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/favoritesSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import axios from 'axios';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.find((fav) => fav.id === movie.id);
  const [posterUrl, setPosterUrl] = useState('');

  const apiKey = import.meta.env.TMDB_API_KEY;

  useEffect(() => {
    const fetchMovieImage = async () => {
      try {
        const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie.movie}`;
        const searchResponse = await axios.get(searchUrl);

        if (searchResponse.data.results.length > 0) {
          const movieResult = searchResponse.data.results[0];
          const posterPath = movieResult.poster_path;
          const fullPosterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
          setPosterUrl(fullPosterUrl);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieImage();
  }, [movie.movie, apiKey]);

  const handleFavorite = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(movie));
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start cursor-pointer"
      onClick={() => window.open(movie.imdb_url, "_blank")}
    >
      <img src={posterUrl} alt={movie.movie} className="w-full h-64 object-contain bg-neutral-300 rounded-lg" />
      <div className='flex justify-between w-full px-2'>
        <div>
          <h2 className="mt-4 text-lg font-semibold">{movie.movie}</h2>
          <p>Rating: {movie.rating}</p>
        </div>
        <button
          onClick={handleFavorite}
          className="mt-2 text-red-600 text-2xl"
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
