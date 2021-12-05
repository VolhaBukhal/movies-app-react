import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Loader = () => {
    return (
        <div>
            <div style={{color: 'yellow', fontSize: '20'}}> is loading ...</div>
            <Box sx={{ width: '60%' }}>
                <LinearProgress />
            </Box>
            
        </div>
    );
};

export default Loader;