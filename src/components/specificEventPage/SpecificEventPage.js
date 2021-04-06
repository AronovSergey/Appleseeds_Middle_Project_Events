import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import './style.css';
import { changeSelectedEvent } from './../../redux/actions';

const SpecificEventPage = () => {
    const { type } = useSelector(state => state.events);
    const { event } = useSelector(state => state.selectedEvent);
    const { id } = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeSelectedEvent(type, id));
    }, [dispatch, type, id]);

    console.log(event);

    if(event.name){
        return (
            <div className="specific-event-container">
                <img src={event.images[0].url} alt={event.name}/>
                <div className="specific-event-data">
                    <h1>{event.name}</h1>
                    <h4>{`Genre: ${event.classifications[0].segment.name} - ${event.classifications[0].genre.name} - ${event.classifications[0].subGenre.name}`}</h4>
                    <h4>{`Event Date: ${event.dates.start.localDate} - ${event.dates.start.localTime}`}</h4>
                </div>
            </div>
        );
    }
    else    
        return <div>loading...</div>
}

export default SpecificEventPage;