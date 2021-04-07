import React from 'react';
import Spinner from './../spinner/Spinner';
import { useSelector } from 'react-redux';

import Event from '../event/Event';

const EventsList = () => {
    const { events } = useSelector(state => state.events);

    if(events.length > 0)
        return (
            <div className="events">            
                {events.map(event => <Event key={event.id} data={ event }/>)}
            </div>
        )
    else return <Spinner />
}

export default EventsList;

