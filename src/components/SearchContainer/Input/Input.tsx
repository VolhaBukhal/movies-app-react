import React, {FC} from 'react'
import style from './Input.module.css'

interface MyProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} 

const Input: FC<MyProps> = ({handleChange}) => {
    return (
        <div>
            <input 
                type="text" 
                className={style.Input} 
                placeholder="What are you looking for?"
                onChange={handleChange}
            />
        </div>
    );
};

export default Input