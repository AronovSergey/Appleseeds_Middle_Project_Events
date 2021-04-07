import React from 'react';
import './style.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => {
    return (
        <div className="spinner">
            <CircularProgress 
                color="secondary"
                size="6rem"
            />
        </div>
    )
}

export default Spinner;
