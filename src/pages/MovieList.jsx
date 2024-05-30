import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import { setMovies } from '../store/moviesSlice';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.items);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(import.meta.env.VITE_API_URL);
      dispatch(setMovies(response.data));
    };

    fetchMovies();
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
