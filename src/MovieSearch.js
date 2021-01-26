import React, { useState, useEffect } from 'react';
import FilmCard from './FilmCard';

export default function MovieSearch() {
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
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          name="query"
          type="text"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => {
            return <FilmCard key={movie.id} movie={movie} />;
          })}
      </div>
    </>
  );
}
