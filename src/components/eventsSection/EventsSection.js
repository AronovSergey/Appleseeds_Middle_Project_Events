import React from 'react';
import { useSelector } from 'react-redux';


const EventsSection = () => {
    const { events } = useSelector(state => state.events);

    console.log(events);
    return (
        <div>
            Events Section
        </div>
    )
}

export default EventsSection;

