import React, {useEffect} from 'react';
import MovieItem from './MovieItem'
import style from './MoviesContainer.module.css'
import MoviesTopBar from './MoviesTopBar'
import {RootState} from 'store/index'
import {useSelector, useDispatch} from 'react-redux'
import {fetchMovies} from 'store/action'


const MoviesContainer = () => {
    const {movies, loading, searchFilter, searchWord} = useSelector((state: RootState) => state.movies);
    console.log("searchFilter", searchFilter);
    console.log("searchWord: ", searchWord);

    const filteredMovies = (searchWord.length === 0) ? [] : movies.filter( movie => {
        if(searchFilter === "Title") {
            return movie.title.toLowerCase().includes(searchWord.toLowerCase());
        } else {
            return movie.genres.some(genre => genre.toLowerCase().includes(searchWord.toLowerCase()) );
        }
    });

    console.log("filtereMovies", filteredMovies);
   
    const dispatch = useDispatch();
    
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
                            {filteredMovies.map((movie, index) => <MovieItem key={movie.id} movie={movie}/>) }
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