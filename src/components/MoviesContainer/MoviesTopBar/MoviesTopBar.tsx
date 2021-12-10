import React, {FC, useCallback} from 'react';
import { MovieFilter, setMovieFilter } from 'store/action';
import style from './MoviesTopBar.module.css'
import Checkbox from '../../SearchContainer/Checkbox/Checkbox'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from 'store'

interface MyProps {
    foundMovie: number
}
const MoviesTopBar: FC<MyProps> = ({foundMovie}) => {
    const {movieFilter} = useSelector((state: RootState) => state.movies);
    const dispatch = useDispatch();

    const handleCheckbox = useCallback((filter: MovieFilter) => {
        dispatch(setMovieFilter(filter))
    }, [dispatch]);

    return (
        <div className={style.MovieResultsRow}>
            <p className={style.MovieFound}>{foundMovie} movies found</p>
            <div className={style.MovieSortBtn}>
                Sort by 
                {Object.values(MovieFilter).map(item => 
                    <Checkbox 
                        key={item} 
                        name={item} 
                        isChecked={item === movieFilter}
                        handleCheckbox={() => handleCheckbox(item)}/>
                )}
            </div>
        </div>
    );
};

export default MoviesTopBar;


