import {SET_RECENT_GAMES} from '../actions/types';

const INIT_STATE = {
    games: [],
    recentGames: []
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_RECENT_GAMES:
            
            const recentGames = action.payload;
            return {
                ...state, 
                recentGames
            }

        default:
            return state;
    }
}