import React from 'react';
import { useDispatch } from 'react-redux';

import { changeHoveredEvent } from './../../../redux/actions';

const Event = ({ data }) => {
    const dispatch = useDispatch();

    let height = data.images[0].height;
    let originalWidth = data.images[0].width;
    let width = data.images[0].width;

    if(width > 200){
        height *= 200/width;
        width = 200; 
    }

    return (
        <img 
            src={data.images[0].url} 
            alt={data.name} 
            style={{
                gridRowEnd: `span ${Math.ceil(height / 10)}`,
                width: `${originalWidth > 200 ? '200' : width}px`
            }}
            onMouseEnter={() => dispatch(changeHoveredEvent(data))}
        />
    )
}

export default Event;
