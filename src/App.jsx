import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import MovieList from './pages/MovieList';
import Favorites from './pages/Favorites';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
