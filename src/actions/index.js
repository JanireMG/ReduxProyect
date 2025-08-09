import { SET_RECENT_POSTS } from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        axios.get('https://api.rawg.io/api/games?key=6411674ed3e4418196f6efd342631dcb&dates=2025-01-01,2025-08-09&platforms=18,1,7')
            .then(response => {
                console.log(response.data.posts);
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data.posts
                })
            })
    }
}