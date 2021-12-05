import React from 'react';
import SearchContainer from '../SearchContainer'
import Header from '../Header'
import MoviesContainer from '../MoviesContainer'
import Footer from '../Footer'

const MoviesMainPage = () => {
    return (
        <div>
            <Header/>
            <SearchContainer/>
            <MoviesContainer/>
            <Footer/>
           
        </div>
    );
};

export default MoviesMainPage;