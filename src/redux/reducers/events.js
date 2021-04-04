import { FETCH_EVENTS, UPDATE_HOVERED_EVENT, FETCH_NUMBER_OF_PAGES } from '../actionTypes';

const initialState = {
  events: [],
  hoveredEvent: {},
  numberOfPages: 0
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS: {
      return { 
        ...state,
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
    case FETCH_NUMBER_OF_PAGES: {
      return { 
        ...state,
        numberOfPages: action.payload.numberOfPages
      };
    }
    
    default:
      return state;
  }
} 
