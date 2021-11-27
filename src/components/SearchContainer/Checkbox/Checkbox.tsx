import React, {FC, useState} from 'react';
import style from './Checkbox.module.css'

interface MyProps {
    name: string;
}
const Checkbox:FC<MyProps> = ({name}) => {
    
    const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(event.target.checked)
    }
    return (
        <div>
            <label className={style.container}>
                <input type="checkbox" onChange={handleCheckbox}></input>
                <span className={style.checkmark}>{name}</span>
            </label>
        </div>
    );
};

export default Checkbox;