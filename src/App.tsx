import React from 'react';
import './App.css';
// import SearchContainer from './components/SearchContainer'
// import Header from './components/Header'
// import MoviesContainer from './components/MoviesContainer'
// import Footer from './components/Footer'
import MoviesMainPage from './components/MoviesMainPage'
import MovieDetailsPage from './components/MovieDetailsPage'
import MovieModal from './components/MovieModal'
import Page404 from './components/Page404'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<MoviesMainPage/> }/>
          <Route path="/movies" element={<MoviesMainPage/> }>
            <Route path='/movies/:movieId'  element={<MovieDetailsPage/>}/>
          </Route>
         
          {/* <Route path="/" element={<Navigate replace to="/movies" />} /> */}
          <Route path="*" element={<Page404/> }/>
        </Routes>
       
        {/* <Header/>
        <SearchContainer/>
        <MoviesContainer/>
        <Footer/> */}
    </div>
    </Router>
    
  );
}

export default App;
