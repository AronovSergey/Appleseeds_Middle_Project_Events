import { FETCH_EVENTS, UPDATE_HOVERED_EVENT, FETCH_NUMBER_OF_PAGES, UPDATE_FAVORITES } from '../actionTypes';

const initialState = {
  events: [],
  hoveredEvent: {},
  numberOfPages: 0, 
  type: 'events',
  update: 0,
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
        numberOfPages: action.payload.numberOfPages,
        type: action.payload.type
      };
    }
    case UPDATE_FAVORITES: {
      return { 
        ...state,
        update: state.update + action.payload.number
      };
    }
    
    default:
      return state;
  }
} 
