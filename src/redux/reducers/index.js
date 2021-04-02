import { combineReducers } from 'redux';
import eventsReducer from './events';
import selectedEventReducer from './selectedEvent';

export default combineReducers({
        events: eventsReducer,
        selectedEvent: selectedEventReducer
});
