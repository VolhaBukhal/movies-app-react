import React, {FC} from 'react'
import style from './Input.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from 'store'

interface MyProps {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} 

const Input: FC<MyProps> = ({value, handleChange}) => {

    return (
        <div>
            <label htmlFor="searchInput">
                <input
                    id="searchInput" 
                    type="text" 
                    className={style.Input} 
                    placeholder="What are you looking for?"
                    value={value}
                    onChange={handleChange}
                />
            </label>
           
        </div>
    );
};

export default Input