import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import style from './Loader.module.css'

const Loader = () => {
    return (
        <div className={style.Loader}>
            <div className={style.LoaderText}> is loading ...</div>
            <Box sx={{ width: '60%', margin: '30px auto'}}>
                <LinearProgress color="inherit" sx={{backgroundColor: '#f75163'}}/>
            </Box>
            
        </div>
    );
};

export default Loader;