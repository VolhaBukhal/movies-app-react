import React, {FC} from 'react';
import { MovieFilter } from 'store/action';
import style from './MoviesTopBar.module.css'
import Button from '../../Button/Button'
import Checkbox from '../../SearchContainer/Checkbox/Checkbox'

interface MyProps {
    foundMovie: number
}
const MoviesTopBar: FC<MyProps> = ({foundMovie}) => {
    return (
        <div className={style.MovieResultsRow}>
            <p>{foundMovie} movies found</p>
            <div className={style.MovieSortBtn}>
                Sort by 
                {Object.values(MovieFilter).map(item => 
                <Button key={item} name={item} handleClick={() => console.log({item})}/>
                // <Checkbox key={item} name={item}/>
                )}
            </div>
        </div>
    );
};

export default MoviesTopBar;


