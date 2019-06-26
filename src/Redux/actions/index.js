import { ADD, DELETE, GET, SHOW, HIDE } from './constants';

const addMovie = (movie) => ({
    type: ADD,
    movie
})

const removeMovie = (movie) => ({
    type: DELETE,
    movie
})

const reveiveData = (data) => ({
    type: GET,
    data
})

const showButton = (str) => ({
    type: SHOW,
    str
})

const hideButton = (str) => ({
    type: HIDE,
    str
})

const fetchMovie = () => dispatch => {
    return fetch('https://5d1146aabebb9800143d20cb.mockapi.io/movielist')
        .then(response =>{
            return response.json()
        })
        .then(response => {
            return dispatch(reveiveData(response))
        })       
}

export { addMovie, removeMovie, fetchMovie, showButton, hideButton } 