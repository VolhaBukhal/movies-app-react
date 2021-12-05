import React, {FC} from 'react'
import style from './Input.module.css'
import {useSelector, useDispatch} from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

interface MyProps {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isActive: boolean;
    handleInputIcon: () => void;
} 

const Input: FC<MyProps> = ({value, handleChange, handleInputIcon, isActive}) => {

    return (
        <div className={style.InputRow}>
            <label htmlFor="searchInput">
                <input
                    id="searchInput" 
                    type="text" 
                    className={style.Input} 
                    placeholder="What are you looking for?"
                    value={value}
                    onChange={handleChange}
                />
                <div className={style.searchIcon} onClick={handleInputIcon}>
                    {isActive ? <ClearIcon/> : <SearchIcon/>}
                </div>
            </label>
           
        </div>
    );
};

export default Input