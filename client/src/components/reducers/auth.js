import {
  SUCCEDED_AUTH_REDIRECT,
  FAILED_AUTH_REDIRECT,
  RESET_AUTH_REDIRECT
} from "../actions/types";

const initialState = {
  redirectedFromAuth: false,
  authSucceded: false
};

export default (state = initialState, { type }) => {
  switch (type) {
    case SUCCEDED_AUTH_REDIRECT:
      return { ...state, redirectedFromAuth: true, authSucceded: true };
    case FAILED_AUTH_REDIRECT:
      return { ...state, redirectedFromAuth: true, authSucceded: false };
    case RESET_AUTH_REDIRECT:
      return { ...state, redirectedFromAuth: false, authSucceded: false };
    default:
      return state;
  }
};
