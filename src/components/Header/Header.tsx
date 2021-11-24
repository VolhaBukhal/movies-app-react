import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={style.HeaderName}>Movies Search Resource</h1>
            <h2 className={style.HeaderTitle}>Find you movie</h2>
        </div>
    );
};

export default Header;