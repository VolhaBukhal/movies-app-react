import React, {FC, useState} from 'react';
import style from './Checkbox.module.css'

interface MyProps {
    name: string;
    isChecked: boolean;
    handleCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Checkbox:FC<MyProps> = ({name, isChecked, handleCheckbox}) => {
    
    return (
        <div>
            <label className={style.container}>
                <input type="checkbox" onChange={handleCheckbox} checked={isChecked}></input>
                <span className={style.checkmark}>{name}</span>
            </label>
        </div>
    );
};

export default Checkbox;