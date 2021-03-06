import { ADD_MOVIE, DELETE_MOVIE, GET_DATA } from "./constants";

const addMovie = movie => ({
  type: ADD_MOVIE,
  movie
});

const removeMovie = movie => ({
  type: DELETE_MOVIE,
  movie
});

const reveiveData = data => ({
  type: GET_DATA,
  data
});

//fetch movie data from mock api
const fetchMovie = () => dispatch => {
  return fetch("https://5d1146aabebb9800143d20cb.mockapi.io/movielist")
    .then(response => {
      return response.json();
    })
    .then(response => {
      return dispatch(reveiveData(response));
    })
    .catch(error => {
      console.error('Error:', error)
    });
};

export { addMovie, removeMovie, fetchMovie };
