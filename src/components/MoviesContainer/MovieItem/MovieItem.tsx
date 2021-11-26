import React, {FC} from 'react';
import {Movie} from 'types/types'
import style from './MovieItem.module.css'

interface MyProps {
    movie: Movie;
}
const MovieItem:FC<MyProps> = ({movie}) => {
    return (
        <div className={style.MovieItem}>
            <div className={style.MovieImg}>
                <img src={movie.poster_path} alt={movie.title}></img>
            </div>
            <div className={style.MovieInfo}>
                <div className={style.MovieTitle}>{movie.title}</div>
                <div className={style.MovieYear}>{movie.release_date}</div>
            </div>
            <div className={style.MovieGenre}>{
                movie.genres.reduce( (prev, next) => `${prev} & ${next}`)
            }</div>
            
        </div>
    );
};

export default MovieItem;