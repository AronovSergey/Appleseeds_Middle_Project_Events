import React, { useState } from 'react';
import moment from 'moment';

import './style.css'
import CalendarGrid from './CalendarGrid';
import CalendarMonitor from './CalendarMonitor';

const Calendar = () => {
    const [today, setToday] = useState(moment());
    const startOfMonth = today.clone().startOf('month').startOf('week');

    const onPrevClick = () => {
        setToday(today.clone().subtract(1, 'month'))
    } 

    const onTodayClick = () => {
        setToday(moment())
    } 

    const onNextClick = () => {
        setToday(today.clone().add(1, 'month'))
    } 

    return (
        <div className="calender">
            <CalendarMonitor 
                today={today}
                onPrevClick={onPrevClick}
                onTodayClick={onTodayClick}
                onNextClick={onNextClick}
            />
            <CalendarGrid 
                startDay={startOfMonth}
                currentDay={today}
            />
        </div>
    )
}

export default Calendar;

