import React from 'react';
import style from './SearchContainer.module.css';
import Input from './Input/Input'
import Button from '../Button/Button'
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
                <Button name="Search" handleClick={() => console.log('search btn clicked')}/>
            </div>
        </div>
    );
};

export default SearchContainer;