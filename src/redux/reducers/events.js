import { UPDATE_EVENTS_LIST } from "../actionTypes";

const initialState = {
  events: [],
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_EVENTS_LIST: {
      return state;
    }
    default:
      return state;
  }
}
