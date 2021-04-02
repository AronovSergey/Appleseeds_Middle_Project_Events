import { UPDATE_SELECTED_EVENT } from '../actionTypes';

const initialState = {
  event: {},
};

export default function selectedEventReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SELECTED_EVENT: {
      return state;
    }
    default:
      return state;
  }
}