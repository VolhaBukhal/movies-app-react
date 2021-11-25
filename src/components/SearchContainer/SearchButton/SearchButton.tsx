import React, {FC} from 'react'
import style from './SearchButton.module.css'

interface MyProps {
    handleClick: () => void;
}
const SearchButton: FC<MyProps> = ({handleClick}) => {
    return (
        <button className={style.searchBtn} onClick={handleClick}>Search</button>
    );
};

export default SearchButton; 