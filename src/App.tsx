import React from 'react';
import './App.css';
import SearchContainer from './components/SearchContainer'
import Header from './components/Header'
import MoviesContainer from './components/MoviesContainer'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'
import {BrowserRouter as Router,
  Routes,
  Route } from 'react-router-dom'
import Page404 from 'components/Page404'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ 
            <>
              <Header/>
              <SearchContainer/>
              <MoviesContainer/>
              <Footer/>
            </>}/>
          <Route path="/movies" element={ 
            <>
              <Header/>
              <SearchContainer/>
              <MoviesContainer/>
              <Footer/>
              <Outlet/>
            </>}>
            <Route path=":movieId" /> 
          </Route>
          <Route path="*" element={ <Page404/> }/>
        </Routes>
      </div>
    </Router>
      
  );
}

export default App;
