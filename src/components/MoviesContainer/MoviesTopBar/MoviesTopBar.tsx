import React from 'react';
import { MovieFilter } from 'store/action';
import style from './MoviesTopBar.module.css'
import Button from '../../Button/Button'
import Checkbox from '../../SearchContainer/Checkbox/Checkbox'


const MoviesTopBar = () => {
    return (
        <div className={style.MovieResultsRow}>
            <p>{7} movies found</p>
            <div className={style.MovieSortBtn}>
                Sort by 
                {Object.values(MovieFilter).map(item => 
                // <Button key={item} name={item} handleClick={() => console.log({item})}/>
                <Checkbox name={item}/>
                )}
            </div>
        </div>
    );
};

export default MoviesTopBar;


