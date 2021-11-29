import React, {FC, useState, useCallback} from 'react';
import {Movie} from 'types/types'
import style from './MovieItem.module.css'
import MovieModal from '../../MovieModal/MovieModal'

interface MyProps {
    movie: Movie;
}
const MovieItem:FC<MyProps> = ({movie}) => {
    const [isHidden, setIsHidden] = useState<boolean>(true);

    const handleModal = useCallback( () => {
        setIsHidden(!isHidden);
    },[isHidden, setIsHidden])


    return (
        <div className={style.MovieItem} onClick={handleModal}>
            <div className={style.MovieImg}>
                <img src={movie.poster_path} alt={movie.title}></img>
                <div className={style.MovieRate}>{movie.vote_average}</div>
            </div>
            <div className={style.MovieInfo}>
                <div className={style.MovieTitle}>{movie.title}</div>
                <div className={style.MovieYear}>{movie.release_date.split('-')[0]}</div>
            </div>
            <div className={style.MovieGenre}>{
                movie.genres.reduce( (prev, next) => `${prev} & ${next}`)
            }</div>
            <MovieModal movie={movie} isHidden={isHidden} handleModal={handleModal}/>
            
        </div>
    );
};

export default MovieItem;