import { FETCH_200_EVENTS } from '../actionTypes';

const initialState = {
  events: [],
};

export default function selectedEventReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_200_EVENTS: {
      return {
        ...state,
        events: action.payload.events
      };
    }
    default:
      return state;
  }
}