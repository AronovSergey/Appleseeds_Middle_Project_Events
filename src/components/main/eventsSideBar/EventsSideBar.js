import React from 'react';
import { useSelector } from 'react-redux';

const EventsSideBar = () => {
    const { hoveredEvent } = useSelector(state => state.events);
    
    if(hoveredEvent.name){
        return (
            <div className="sidebar">
                <h1>{hoveredEvent.name}</h1>
                <img 
                    src={hoveredEvent.images[0].url} 
                    alt={hoveredEvent.name} 
                />
                {hoveredEvent.dates && (
                    <h2>{`${hoveredEvent.dates.start.localDate} : ${hoveredEvent.dates.start.localTime}`}</h2>
                )}
            </div>
        )
    }
    else {
        return <div className="hovered-section">Loading</div>
    }
    
}

export default EventsSideBar;
