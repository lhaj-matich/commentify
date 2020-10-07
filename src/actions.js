import { CHANGE_SEARCH_FIELD } from "./constants";

import { REQUEST_COMMENTS_PENDING } from "./constants";
import { REQUEST_COMMENTS_SUCCESS } from "./constants";
import { REQUEST_COMMENTS_FAILED } from "./constants";

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
};

export const fetchComments = (dispatch) => {
  dispatch({ type: REQUEST_COMMENTS_PENDING });
  fetch("https://api.mocki.io/v1/90c0d5c4")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: REQUEST_COMMENTS_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: REQUEST_COMMENTS_FAILED, payload: error });
    });
};
