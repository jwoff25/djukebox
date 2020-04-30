import {
  SUCCEDED_AUTH_REDIRECT,
  FAILED_AUTH_REDIRECT,
  RESET_AUTH_REDIRECT
} from "./types";
import store from "../store";

export const authSucceded = () => {
  store.dispatch({
    type: SUCCEDED_AUTH_REDIRECT
  });
};

export const authFailed = () => {
  store.dispatch({
    type: FAILED_AUTH_REDIRECT
  });
};

export const resetAuth = () => {
  store.dispatch({
    type: RESET_AUTH_REDIRECT
  });
};
