import { CHANGE_SEARCH_FIELD } from "./constants";

import { REQUEST_COMMENTS_PENDING } from "./constants";
import { REQUEST_COMMENTS_SUCCESS } from "./constants";
import { REQUEST_COMMENTS_FAILED } from "./constants";

const searchInitState = {
  searchField: "",
};

export const searchComments = (state = searchInitState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const commentsInitState = {
  isPending: false,
  comments: [],
  error: "",
};

export const requestComments = (state = commentsInitState, action = {}) => {
  switch (action.type) {
    case REQUEST_COMMENTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_COMMENTS_SUCCESS:
      return Object.assign({}, state, {
        isPending: false,
        comments: action.payload,
      });
    case REQUEST_COMMENTS_FAILED:
      return Object.assign({}, state, {
        isPending: false,
        comments: [],
        error: action.payload,
      });
    default:
      return state;
  }
};
