import './App.css';
import React, { useState } from 'react';
import MovieSearch from './MovieSearch';
import CardList from './CardList';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=a91fa57195fd869df2c62fd844050e4b&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <MovieSearch
        searchMovies={searchMovies}
        setQuery={setQuery}
        setMovies={setMovies}
        query={query}
        movies={movies}
      />
      <CardList movies={movies} />
    </div>
  );
}

export default App;
