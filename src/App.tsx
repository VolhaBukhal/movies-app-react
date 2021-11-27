import React from 'react';
import './App.css';
import SearchContainer from './components/SearchContainer'
import Header from './components/Header'
import MoviesContainer from './components/MoviesContainer'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchContainer/>
      <MoviesContainer/>
      <Footer/>
    </div>
  );
}

export default App;
