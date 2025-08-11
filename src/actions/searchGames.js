import axios from 'axios';
import { SET_SEARCH_GAMES } from './types';

export const fetchSearchGames = (query) => {
    const apiKey = "6411674ed3e4418196f6efd342631dcb";

    return async function(dispatch) {
        try {
            const url = "https://api.rawg.io/api/games?key=" + apiKey
                + "&platforms=18,1,7"
                + "&search=" + encodeURIComponent(query);

            const response = await axios.get(url);

            dispatch({
                type: SET_SEARCH_GAMES,
                payload: response.data.results
            });
        } catch (error) {
            console.error("Error en la búsqueda:", error);
        }
    };
};
