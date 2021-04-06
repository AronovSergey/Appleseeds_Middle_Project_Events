import React from 'react';
import { useSelector } from 'react-redux';

import Event from '../event/Event';

const EventsList = () => {
    const { events } = useSelector(state => state.events);

    return (
        <div className="events">            
            {events.map(event => <Event key={event.id} data={ event }/>)}
        </div>
    )
}

export default EventsList;

