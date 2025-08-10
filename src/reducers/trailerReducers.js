import {SET_RECENT_TRAILERS} from '../actions/types';

const INIT_STATE = {
    trailers: [],
    recentTrailers: []
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_RECENT_TRAILERS:
            
            const recentTrailers = action.payload;
            return {
                ...state, 
                recentTrailers
            }

        default:
            return state;
    }
}