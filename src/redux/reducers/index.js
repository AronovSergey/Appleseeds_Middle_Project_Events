import { combineReducers } from 'redux';
import eventsReducer from './events';
import selectedEventReducer from './selectedEvent';
import calendarReducer from './calendar';
import resultsReducer from './results';

export default combineReducers({
        events: eventsReducer,
        selectedEvent: selectedEventReducer,
        calendar: calendarReducer,
        results: resultsReducer
});
