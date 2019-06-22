import { ADD, DELETE, GET, SHOW, HIDE } from '../actions/constants';

const defaultState = {
    mylist: [],
    recommendations: []
}

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {

        case GET:
            return action.data;

        case ADD:
            const recommendItem = state.recommendations.map(item => item.id);
            const recommendIndex = recommendItem.indexOf(action.movie.id);
            return {
                ...state,
                mylist: [...state.mylist,
                ...state.recommendations.splice(recommendIndex, 1)],
                [action.str]: false
            }


        case DELETE:
            const listItem = state.mylist.map(item => item.id)
            const listIndex = listItem.indexOf(action.movie.id);
            return {
                ...state,
                recommendations: [...state.recommendations,
                ...state.mylist.splice(listIndex, 1)],
                [action.str]: false
            }

        case SHOW:
           
            return{
                ...state,
                [action.str]: true
            }

        case HIDE:
           
            return{
                ...state,
                [action.str]: false
            }
        
            default:
            return state;
    }
}

export default rootReducer
