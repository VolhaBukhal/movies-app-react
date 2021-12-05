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
    const [isActive, setIsActive] = useState(false);

    const dispatch = useDispatch();
    console.log('searchFilter ', searchFilter);

    const handleCheckbox = useCallback((filter: SearchFilter) => {
        dispatch(setSearchFilterMovie(filter))
    }, [dispatch]);
    

    const handleSearchWord = (event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log('from handleSearchWord ', event.target.value);
        setIsActive(true);
        setInputWord(event.target.value);
    }

    const sendSearchWordToStore = useCallback(() => {
        dispatch(setSearchWord(inputWord));
    }, [dispatch, inputWord])

    const handleInputIcon = useCallback(() => {
        if(isActive) {
            setInputWord('');
            setIsActive(false);
        } else {
            return;
        }
    }, [setInputWord, setIsActive, isActive])

    return (
        <div>
            <Input 
                isActive={isActive}
                value={inputWord}
                handleChange={handleSearchWord} 
                handleInputIcon={handleInputIcon}
                />
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
                </div>
                <Button name="Search" handleClick={sendSearchWordToStore}/>
            </div>
        </div>
    );
};

export default SearchContainer;