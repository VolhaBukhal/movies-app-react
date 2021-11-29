import React, {useEffect} from 'react';
import MovieItem from './MovieItem'
import style from './MoviesContainer.module.css'
import MoviesTopBar from './MoviesTopBar'
import {RootState} from 'store/index'
import {useSelector, useDispatch} from 'react-redux'
import {fetchMovies} from 'store/action'


const MoviesContainer = () => {
    const {movies, loading, searchFilter, searchWord, movieFilter} = useSelector((state: RootState) => state.movies);
    const dispatch = useDispatch();

    const filteredMovies = (searchWord.length === 0) ? [] : movies.filter( movie => {
        if(searchFilter === "Title") {
            return movie.title.toLowerCase().includes(searchWord.toLowerCase());
        } else {
            return movie.genres.some(genre => genre.toLowerCase().includes(searchWord.toLowerCase()) );
        }
    });

    if(movieFilter === "rating") {
        console.log( 'is rating')
        filteredMovies.sort((a, b) => b.vote_average - a.vote_average);
    }
    if(movieFilter === "release date") {
        console.log( 'is release date')
        filteredMovies.sort((a, b) => +b.release_date.split('-')[0] - +a.release_date.split('-')[0]);
    }

    console.log("filtereMovies", filteredMovies);
    
    useEffect( () => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <div>
            {
                !loading ? (
                    <>
                    <MoviesTopBar foundMovie={filteredMovies.length}/>
                        <div className={style.MovieContainer}>
                            {filteredMovies.map((movie, index) => <MovieItem key={movie.id} movie={movie}/> ) }
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