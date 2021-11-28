import React, {FC} from 'react'
import style from './Input.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from 'store'

interface MyProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} 

const Input: FC<MyProps> = ({handleChange}) => {

    // const {searchWord} = useSelector((state: RootState) => state.movies);

    return (
        <div>
            <label htmlFor="searchInput">
                <input
                    id="searchInput" 
                    type="text" 
                    className={style.Input} 
                    placeholder="What are you looking for?"
                    onChange={handleChange}
                />
            </label>
           
        </div>
    );
};

export default Input