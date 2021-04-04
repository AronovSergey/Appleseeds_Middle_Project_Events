import { FETCH_EVENTS, UPDATE_HOVERED_EVENT } from '../actionTypes';

const initialState = {
  events: [],
  hoveredEvent: {},
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS: {
      return { 
        events: action.payload.events,
        hoveredEvent: action.payload.events[0]
      };
    }
    case UPDATE_HOVERED_EVENT: {
      return { 
        ...state,
        hoveredEvent: action.payload.event
      };
    }
    default:
      return state;
  }
} 
