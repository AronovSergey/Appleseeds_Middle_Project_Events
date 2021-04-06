import { CHANGE_SELECTED_EVENT } from '../actionTypes';

const initialState = {
  event: {},
};

export default function selectedEventReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SELECTED_EVENT: {
      return {
        ...state,
        event: action.payload.event
      };
    }
    default:
      return state;
  }
}