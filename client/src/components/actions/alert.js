import { SET_ALERT, REMOVE_ALERT } from "./types";
import uuid from "uuid";
import store from "../store";

export const setAlert = (type, msg) => {
  const id = uuid.v4();
  // Create alert
  store.dispatch({
    type: SET_ALERT,
    payload: { id, type, msg }
  });
  // Remove it from state
  setTimeout(() => {
    store.dispatch({ type: REMOVE_ALERT, payload: id });
  }, 100);
};
