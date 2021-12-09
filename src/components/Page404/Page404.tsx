import React from 'react';
import {Link} from 'react-router-dom'
import style from './Page404.module.css'


const Page404 = () => {
    return (
        <div className={style.PageWrapper}>
           <div className={style.Page}>Page not found</div>
           <Link className={style.MainPageLink} to="/"> Back to Main Page</Link>
        </div>
    );
};

export default Page404;