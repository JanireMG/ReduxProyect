import {
    SET_RECENT_GAMES
} from '../actions/types';

const INIT_STATE = {
    pgames: [],
    recentGames: []
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_RECENT_GAMES:
            
            return { ...state, recentGames: action.payload }
        default:
            return state;
    }
}