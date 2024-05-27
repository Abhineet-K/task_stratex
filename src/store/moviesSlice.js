import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    items: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.items = action.payload.sort((a, b) => b.rating - a.rating);
    },
  },
});

export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
