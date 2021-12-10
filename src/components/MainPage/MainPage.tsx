import React from 'react'
import SearchContainer from '../SearchContainer'
import Header from '../Header'
import MoviesContainer from '../MoviesContainer'
import Footer from '../Footer'
import {Outlet} from 'react-router-dom'

const MainPage = () => {
  return (
    <div>
       <Header/>
        <SearchContainer/>
        <MoviesContainer/>
        <Footer/>
        <Outlet/>

    </div>
  )
}

export default MainPage