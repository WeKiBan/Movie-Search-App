import React from 'react';

export default function MovieSearch(props) {
  return (
    <form className="form" onSubmit={props.searchMovies}>
      <label className="label" htmlFor="query">
        Enter Movie Title
      </label>
      <input
        className="input"
        name="query"
        type="text"
        placeholder="i.e. Jurassic Park"
        value={props.query}
        onChange={(e) => {
          props.setQuery(e.target.value);
        }}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
