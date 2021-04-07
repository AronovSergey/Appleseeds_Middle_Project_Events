import React from 'react';
import moment from 'moment';


const CalendarGrid = ({ startDay, currentDay }) => {
    const day =  startDay.clone().subtract(1, 'day');
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());

    return (
        <div className="calendar-grid">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div
                    className="calendar-cell calendar-header-cell"
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
                </div>
            ))}
        </div>
    )
}

export default CalendarGrid;
