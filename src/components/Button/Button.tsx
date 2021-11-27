import React, {FC} from 'react'
import style from './Button.module.css'

interface MyProps {
    name: string;
    handleClick: () => void;
}
const Button: FC<MyProps> = ({name, handleClick}) => {
    return (
        <button className={style.searchBtn} onClick={handleClick}>{name}</button>
    );
};

export default Button; 