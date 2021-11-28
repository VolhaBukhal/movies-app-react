import React, {useState, useCallback} from 'react';
import style from './SearchContainer.module.css';
import Input from './Input/Input'
import Button from '../Button/Button'
import Checkbox from './Checkbox/Checkbox'
import {SearchFilter, setSearchFilterMovie, setSearchWord} from 'store/action'
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from 'store'


const SearchContainer = () => {
    const {searchFilter} = useSelector( (state: RootState) => state.movies);
    const [inputWord, setInputWord] = useState('');

    const dispatch = useDispatch();
    console.log('searchFilter ', searchFilter);

    const handleCheckbox = useCallback((filter: SearchFilter) => {
        dispatch(setSearchFilterMovie(filter))
    }, [dispatch]);
    

    const handleSearchWord = (event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log('from handleSearchWord ', event.target.value);
        setInputWord(event.target.value);
    }

    const sendSearchWordToSore = useCallback(() => {
        dispatch(setSearchWord(inputWord));
        setInputWord('');
    }, [dispatch, inputWord])
    

    return (
        <div>
            <Input handleChange={handleSearchWord} value={inputWord}/>
            <div className={style.SearchOptions}>
                <div className={style.SearchBy}>search by
                    {
                        Object.values(SearchFilter).map(filterName => 
                            <Checkbox 
                                key={filterName} 
                                name={filterName} 
                                isChecked={filterName === searchFilter}
                                handleCheckbox={() => handleCheckbox(filterName)}
                            />)
                    }
                    {/* <Checkbox name="Title"/>
                    <Checkbox name="Genre"/> */}
                </div>
                <Button name="Search" handleClick={sendSearchWordToSore}/>
            </div>
        </div>
    );
};

export default SearchContainer;