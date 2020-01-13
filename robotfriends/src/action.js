import {
  CHANGE_SEARCH_FIELD,
  REQUESTS_ROBOTS_PENDING,
  REQUESTS_ROBOTS_SUCCESS,
  REQUESTS_ROBOTS_FAILED
} from "./constants";
export const setSearchField = text => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
};

export const requestRobots = () => dispatch => {
  dispatch({ type: REQUESTS_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      return response.json();
    })
    .then(users => {
      dispatch({ type: REQUESTS_ROBOTS_SUCCESS, payload: users });
    })
    .catch(error => dispatch({ type: REQUESTS_ROBOTS_FAILED, payload: error }));
};
