import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const HoveredEvent = () => {
    const history = useHistory();
    const { hoveredEvent } = useSelector(state => state.events);
    
    if(hoveredEvent.name){
        return (
            <div className="sidebar" onClick={() => history.push(`/events/${hoveredEvent.id}`)}>
                <h1>{hoveredEvent.name}</h1>
                <img 
                    src={hoveredEvent.images[0].url} 
                    alt={hoveredEvent.name} 
                />
                {hoveredEvent.dates && (
                    <h2>{`${hoveredEvent.dates.start.localDate} : ${hoveredEvent.dates.start.localTime}`}</h2>
                )}
                <button>
                    <FavoriteBorderIcon 
                        fontSize="large"
                        color="secondary"
                        
                    />
                </button>
            </div>
        )
    }
    else {
        return <div className="hovered-section">Loading</div>
    }
    
}

export default HoveredEvent;
