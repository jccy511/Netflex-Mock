import React, { Component } from 'react';
import Header from './components/Header';
import LikeList from './components/LikeList';
import MovieList from './components/MovieList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className = "App-header"/>
        <MovieList list="My List" btnName="Remove" listType="mylist"/>
        <MovieList list="Recommendation List" btnName="Add" listType="recommendations"/>
        <LikeList/>
      </div>
    );
  }
}

export default App;
