import React, {useState, useEffect} from 'react';
import {Movie, MovieData} from 'types/types'
import MovieItem from './MovieItem'
import style from './MoviesContainer.module.css'
import MoviesTopBar from './MoviesTopBar'
import {RootState} from 'store/index'
import {useSelector, useDispatch} from 'react-redux'
import {fetchMovies} from 'store/action'


const MoviesContainer = () => {
    const {movies, loading} = useSelector((state: RootState) => state.movies);
    console.log('from MoviesContainer ', movies)
    const dispatch = useDispatch();
    
    useEffect( () => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <div>
            {
                !loading ? (
                    <>
                    <MoviesTopBar/>
                    <div className={style.MovieContainer}>
                        {movies.map((movie, index) => index !== 1 && <MovieItem key={movie.id} movie={movie}/>) }
                    </div>
                    </>
                ) : (
                    <div> is loading...</div>
                )
            }
        </div>
    );
};

export default MoviesContainer;