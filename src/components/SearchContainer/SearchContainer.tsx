import React from 'react';
import style from './SearchContainer.module.css';
import Input from './Input/Input'
import SearchButton from './SearchButton/SearchButton'
import Checkbox from './Checkbox/Checkbox'

const SearchContainer = () => {
    return (
        <div>
            <Input handleChange={(event) => console.log(event.target.value)}/>
            <div className={style.SearchOptions}>
                <div className={style.SearchBy}>search by
                    <Checkbox name="Title"/>
                    <Checkbox name="Genre"/>
                </div>
                <SearchButton handleClick={() => console.log('search btn clicked')}/>
            </div>
        </div>
    );
};

export default SearchContainer;