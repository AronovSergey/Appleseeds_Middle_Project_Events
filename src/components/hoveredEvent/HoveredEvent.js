import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { addEventToLocal, removeEventFromLocal, inFavorites } from './../../localStorage/localStorage'

const HoveredEvent = () => {
    const history = useHistory();
    const { hoveredEvent } = useSelector(state => state.events);
    const [isFavorite, setIsFavorite] = useState(inFavorites(hoveredEvent));


    const onLikeClick = () => {
        addEventToLocal(hoveredEvent);
        setIsFavorite(!isFavorite);
    }

    const onDislikeClick = () => {
        removeEventFromLocal(hoveredEvent);
        setIsFavorite(!isFavorite);
    }
    
    useEffect(()=>{
        setIsFavorite(inFavorites(hoveredEvent))
    }, [hoveredEvent])

    if(hoveredEvent.name){
        return (
            <div className="sidebar" >
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
                <button
                    onClick={isFavorite ? onDislikeClick : onLikeClick}
                >
                    {isFavorite ?
                        <FavoriteIcon 
                            fontSize="large"
                            color="secondary" 
                        /> :
                        <FavoriteBorderIcon 
                            fontSize="large"
                            color="secondary" 
                        />
                    }

                </button>
            </div>
        )
    }
    else {
        return <div className="hovered-section">Loading</div>
    }
    
}

export default HoveredEvent;
