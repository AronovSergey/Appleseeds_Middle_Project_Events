import React from 'react';
import { useSelector } from 'react-redux';

import Event from '../event/Event';
import './style.css'


const EventsSection = () => {
    const { events } = useSelector(state => state.events);

    return (
        <div className="events-section">            
            {events.map(event => <Event data={ event }/>)}
        </div>
    )
}

export default EventsSection;

