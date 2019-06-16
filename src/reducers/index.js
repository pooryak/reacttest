import { FETCH_DATA } from "../actions/types";
import { is_loading } from "../actions/types";
import { error_in_fetch } from "../actions/types";
import { change_data } from "../actions/types";
import { NextItem } from "../actions/types";
const initialState = {
  data: [],
  isloading: false,
  haserror: "",
  counter: 0
};
export default function data(state = initialState, action) {
  switch (action.type) {
    case is_loading:
      return Object.assign({}, state, {
        isloading: action.isloading
      });
    case error_in_fetch:
      return Object.assign({}, state, {
        haserror: action.haserror
      });
    case FETCH_DATA:
      return Object.assign({}, state, {
        data: action.data
      });
    case change_data:
      const newState = { ...state };
      newState.data.cards[action.payload.index].title = action.payload.title;
      newState.data.cards[action.payload.index].description =
        action.payload.description;
      return newState;
    case NextItem:
      if (state.counter == 4) {
        return { ...state, counter: 0 };
      } else {
        return { ...state, counter: state.counter + 1 };
      }

    default:
      return state;
  }
}
