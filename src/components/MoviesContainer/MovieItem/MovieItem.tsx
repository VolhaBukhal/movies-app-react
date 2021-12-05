import React, {FC, useState, useCallback} from 'react';
import {Movie} from 'types/types'
import style from './MovieItem.module.css'
import MovieModal from '../../MovieModal/MovieModal'
import fallback from 'assets/img/defaultImg.jpg'
// import fallback from 'assets/img/imageDefault1.png'
import {Link, Outlet, useParams, useNavigate} from 'react-router-dom'

interface MyProps {
    movie: Movie;
}
const MovieItem:FC<MyProps> = ({movie}) => {
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const [isImgError, setIsImgError] = useState<boolean>(false);
    let params = useParams();
    let navigate = useNavigate();
    console.log(params)

    const handleModal = useCallback( () => {
        setIsHidden(!isHidden);
        if (!isHidden) {
            navigate('');
        }
    },[isHidden, navigate, setIsHidden])

    const handlerImageError = ( event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setIsImgError(true);
        event.currentTarget.src = fallback;
      };

    return (
            
        <div className={style.MovieItem} onClick={handleModal}>
            <div className={style.MovieImg}>
                <img 
                    src={movie.poster_path} 
                    alt={movie.title}
                    onError={handlerImageError}
                ></img>
                <div className={style.MovieRate}>{movie.vote_average}</div>
            </div>
            <div className={style.MovieInfo}>
                <div className={style.MovieTitle}>{movie.title}</div>
                <div className={style.MovieYear}>{movie.release_date.split('-')[0]}</div>
            </div>
            <div className={style.MovieGenre}>{
                movie.genres.reduce( (prev, next) => `${prev} & ${next}`)
            }</div>
            
            <Link className={style.MovieLink} to={`/movies/${movie.id}`} > to movie detailes...
                <MovieModal isImgError={isImgError} movie={movie} isHidden={isHidden} handleModal={handleModal}/>
                </Link>
            <Outlet/>
        </div>
    );
};

export default MovieItem;

