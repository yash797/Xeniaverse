import * as actions from "./Actions";
import defaultState from "./DefaultState";

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        loggedIn: true,
        userData: action.payload,
      };
    case actions.LOGOUT:
      return {
        ...state,
        userData: {},
        loggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
