import {SET_SEARCH_GAMES} from '../actions/types';

const INIT_STATE = {
    searchGames: []
}

export default function searchReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_SEARCH_GAMES:
            
            return {
                ...state, 
                searchGames: action.payload
            }

        default:
            return state;
    }
}