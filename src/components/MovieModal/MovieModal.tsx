import React, {FC} from 'react';
import {Movie} from 'types/types'
import style from './MovieModal.module.css'
import className from 'classnames/bind'

const cx = className.bind(style);

interface ModalProps {
    movie: Movie;
    isHidden: boolean;
    handleModal: () => void;
}

const MovieModal:FC<ModalProps> = ({movie, isHidden, handleModal}) => {
    return (
        <div className={cx({
            MovieModal: true,
            hidden: isHidden
            })}>
            <div 
              className={style.ModalInfo}
              style={{backgroundImage: `url("${movie.poster_path}")`}}>
                <div className={style.ModalClose} onClick={handleModal}>X</div>
                <h3 className={style.MovieTitle}>{movie.title}</h3>
                <p>{movie.genres.join(', ')}</p>
                <p className={style.MovieDescr}>{movie.overview}</p>
                <div className={style.MovieBudget}>Budget ${movie.budget}</div>
            </div>
        </div>
    );
};

export default MovieModal;

