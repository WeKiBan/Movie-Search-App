import React from 'react';
import FilmCard from './FilmCard';

export default function CardList(props) {
  return (
    <div className="card--list">
      {props.movies
        .filter((movie) => movie.poster_path)
        .map((movie) => {
          return <FilmCard key={movie.id} movie={movie} />;
        })}
    </div>
  );
}
