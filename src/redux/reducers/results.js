import { CHANGE_SEARCH_RESULTS } from '../actionTypes';

const initialState = {
  events: [],
};

export default function selectedEventReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_RESULTS: {
      return {
        ...state,
        events: action.payload.events
      };
    }
    default:
      return state;
  }
}