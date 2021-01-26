import './App.css';
import React, { Component } from 'react';
import MovieSearch from './MovieSearch';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <MovieSearch />
      </div>
    );
  }
}

export default App;
