import React, {useState, useEffect} from 'react';
import {Movie} from 'types/types'
import MovieItem from './MovieItem'
import style from './MoviesContainer.module.css'

interface MovieData {
    data: Movie[];
}

const MoviesContainer = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect( () => {
        const url = 'http://reactjs-cdp.herokuapp.com/movies';
        fetch(url)
          .then( (data):Promise<MovieData> => data.json() )
          .then (data => {
            setMovies(data.data);
            setIsLoaded(true);
          });
    });


    return (
        <div>
            {
                isLoaded ? (
                    <>
                    <div className={style.MovieContainer}>
                        {movies.map(movie => <MovieItem key={movie.id} movie={movie}/>) }
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