import React from 'react';
import './App.css';
import MainPage from './components/MainPage'

import {BrowserRouter as Router,
  Routes,
  Route } from 'react-router-dom'
import Page404 from 'components/Page404'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={ <MainPage/> }/>
          <Route path="/movies" element={ <MainPage/> }>
            <Route path=":movieId" /> 
          </Route>
          <Route path="*" element={ <Page404/> }/>
        </Routes>
      </div>
    </Router>
      
  );
}

export default App;
