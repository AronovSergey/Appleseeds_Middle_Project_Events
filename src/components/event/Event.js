import React from 'react';


const Event = ({ data }) => {
    let height = data.images[0].height;
    let width = data.images[0].width;

    if(width > 250) {
        height /= (width / 250);
        width = 250;
    }

    return (
        <img 
            src={data.images[0].url} 
            alt={data.name} 
            style={{
                gridRowEnd: `span ${Math.ceil(height / 10)}`,
                width: width,
            }}
        />
    )
}

export default Event;
