import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store} from 'store'
import {BrowserRouter as Router,
        Routes,
        Route } from 'react-router-dom'
import Page404 from 'components/Page404'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={ <App/>}/>
          <Route path="/movies" element={ <App /> }>
            <Route path=':movieId'/>
          </Route>
          <Route path='*' element={ <Page404/> }/>
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

