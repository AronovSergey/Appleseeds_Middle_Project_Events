import { FETCH_EVENTS } from '../actionTypes';

const initialState = {
  events: [],
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS: {
      return { events: action.payload.events };
    }
    default:
      return state;
  }
} 
