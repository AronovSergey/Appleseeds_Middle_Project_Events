import React from 'react';

const CalendarMonitor = ({ today, onPrevClick, onTodayClick, onNextClick }) => {
    return (
        <div className="monitor-container">
            <div className="monitor-container__month">
                <span>{today.format('MMMM')}</span>
                <span>{today.format('YYYY')}</span>
            </div>
            <div>
                <button onClick={onPrevClick}>&lt;</button>
                <button onClick={onTodayClick}>Today</button>
                <button onClick={onNextClick}>&gt;</button>
            </div>
        </div>

    )
}

export default CalendarMonitor;
