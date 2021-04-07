import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const CalendarGrid = ({ startDay, currentDay }) => {
    const history = useHistory();
    const { events } = useSelector(state => state.calendar);
    const day =  startDay.clone().subtract(1, 'day');
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());

    const getSpecificDayEvents = (date) => {
        let result = [];
        
        if(events.length > 0){
            result = events.filter(event => event.dates.start.localDate === date.format('YYYY-MM-DD'));
        }

        if(result.length > 2)
            result = result.slice(0, 3);

        if (result.length > 0)
            return (result);
        return false;
    }

    getSpecificDayEvents(day);

    return (
        <div className="calendar-grid">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div
                    className="calendar-cell calendar-header-cell"
                    key={day}
                >   
                    <div className={`day-wrapper`}>
                        {day}
                    </div>
                    
                </div>
            ))}
            {daysArray.map(day => (
                <div 
                    className="calendar-cell"
                    key={day.format('DDMMYYYY')}
                    style={{
                        backgroundColor: `${day.day() === 5 || day.day() === 6 ? '#272829' : '#1E1F21'}`
                    }}
                >
                    <div className={`day-wrapper ${currentDay.isSame(day, 'day') ?"current-day" : ""}`}>
                        {day.format('D')}
                        
                    </div>
                    {getSpecificDayEvents(day) && getSpecificDayEvents(day).map(event => (
                        <div
                            className="event"
                            key={`event${event.id}`}
                            onClick={() => history.push(`/events/${event.id}`)}
                        >
                            {event.name.split(' ').slice(0, 5).join(' ')}
                        </div>
                    ))} 
                </div>
            ))}
        </div>
    )
}

export default CalendarGrid;
