import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';


const MineBreadcrumbs = ({ type, setType, setPage }) => {
    const onButtonClick = () => {
        if(type === 'events')
            setType('attractions');
        else 
            setType('events');

        setPage(0);
    }

    return (
        <div className="breadcrumb">
            <Breadcrumbs aria-label="breadcrumb" >
            <span 
                className={`${type === 'events' ? 'textPrimary' : 'inherit'}`}
                onClick={onButtonClick}
            >Events</span>
            <span 
                className={`${type === 'attractions' ? 'textPrimary' : 'inherit'}`}
                onClick={onButtonClick}
            >Attractions</span>
        </Breadcrumbs>
        </div>
    )
}

export default MineBreadcrumbs;
