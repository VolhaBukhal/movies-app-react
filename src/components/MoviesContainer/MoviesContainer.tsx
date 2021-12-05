import React, {useEffect, useCallback} from 'react';
import MovieItem from './MovieItem'
import style from './MoviesContainer.module.css'
import MoviesTopBar from './MoviesTopBar'
import {RootState} from 'store/index'
import {useSelector, useDispatch} from 'react-redux'
import {fetchMovies, setMoviesLimit} from 'store/action'
import Button from 'components/Button'
import Loader from 'components/Loader'


const MoviesContainer = () => {
    const {movies, loading, searchFilter, searchWord, movieFilter, moviesLimit} = useSelector((state: RootState) => state.movies);
    const dispatch = useDispatch();

    console.log('all mivies: ', movies);

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
    
    // useEffect( () => {
    //     dispatch(fetchMovies(moviesLimit));
    // }, [dispatch, moviesLimit]);

    const setLimit = useCallback(() => {
        dispatch(setMoviesLimit(moviesLimit+10))
    }, [dispatch, moviesLimit])

    return (
        <div>
            {
                !loading ? (
                    <>
                    <MoviesTopBar foundMovie={filteredMovies.length}/>
                        <div className={style.MovieContainer}>
                            {filteredMovies.map((movie, index) => <MovieItem key={movie.id} movie={movie}/> ) }
                        </div>
                        { (filteredMovies.length > 0) && <Button name="Show more" handleClick={setLimit} /> }
                    </>
                ) : (
                    <Loader/>
                )
            }
        </div>
    );
};

export default MoviesContainer;