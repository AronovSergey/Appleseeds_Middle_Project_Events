import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LikeButton from '../likeButton/LikeButton';

const HoveredEvent = () => {
    const history = useHistory();
    const { hoveredEvent } = useSelector(state => state.events);

    if(hoveredEvent.name){
        return (
            <div className="sidebar">
                <div onClick={() => history.push(`/events/${hoveredEvent.id}`)}>
                    <h1>{hoveredEvent.name}</h1>
                    <img 
                        src={hoveredEvent.images[0].url} 
                        alt={hoveredEvent.name} 
                    />
                    {hoveredEvent.dates && (
                        <h2>{`${hoveredEvent.dates.start.localDate} : ${hoveredEvent.dates.start.localTime}`}</h2>
                    )}
                </div>
                <LikeButton event={hoveredEvent}/>
            </div>
        )
    }
    else {
        return <div className="hovered-section">Loading</div>
    }
    
}

export default HoveredEvent;
