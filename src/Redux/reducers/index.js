import { ADD_MOVIE, DELETE_MOVIE, GET_DATA } from "../actions/constants";

const defaultState = {
  mylist: [],
  recommendations: []
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.data;

    case ADD_MOVIE:
      const recommendItem = state.recommendations.map(item => item.id);
      const recommendIndex = recommendItem.indexOf(action.movie.id);
      return {
        ...state,
        mylist: [
          ...state.mylist,
          ...state.recommendations.splice(recommendIndex, 1)
        ],
        [action.str]: false
      };

    case DELETE_MOVIE:
      const listItem = state.mylist.map(item => item.id);
      const listIndex = listItem.indexOf(action.movie.id);
      return {
        ...state,
        recommendations: [
          ...state.recommendations,
          ...state.mylist.splice(listIndex, 1)
        ],
        [action.str]: false
      };

    default:
      return state;
  }
};

export default rootReducer;
