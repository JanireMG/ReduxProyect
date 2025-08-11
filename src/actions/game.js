import { SET_RECENT_GAMES } from './types';
import moment from 'moment'

import axios from 'axios';

export function fetchRecentGames() {
    const apiKey= "6411674ed3e4418196f6efd342631dcb";
    const actualDate= moment().format('YYYY-MM-DD');
    const monthAgo=moment().subtract(1, 'month').format('YYYY-MM-DD');
    return async function(dispatch) {
        try {
            const url = "https://api.rawg.io/api/games?key=" + apiKey 
                + "&dates=" + monthAgo + "," + actualDate 
                + "&platforms=18,1,7";

            const gamesResponse = await axios.get(url);
            
            const games = gamesResponse.data.results.slice(0, 10); 

            // 2. Para cada juego, obtener su screenshot principal
            const gamesWithImages = await Promise.all(
                games.map(async (game) => {
                    try {
                        const screenshotRes = await axios.get(
                            "https://api.rawg.io/api/games/" + game.id + "/screenshots?key=" + apiKey
                        );
                        const screenshots = screenshotRes.data.results;
                        const image = screenshots.length > 0 ? screenshots[0].image : null;

                        return {
                            ...game,
                            screenshot: image
                        };
                    } catch (err) {
                        console.warn("No se pudo obtener screenshots del juego" + game.name );
                        return {
                            ...game,
                            screenshot: null
                        };
                    }
                })
            );

            // 3. Dispatch al store
            dispatch({
                type: SET_RECENT_GAMES,
                payload: gamesWithImages
            });

        } catch (error) {
            console.error("Error al obtener juegos recientes:", error);
        }
    };
}

export function fetchRecentGamesWithQuery(query) {
    const apiKey= "6411674ed3e4418196f6efd342631dcb";
    const actualDate= moment().format('YYYY-MM-DD');
    const monthAgo=moment().subtract(1, 'month').format('YYYY-MM-DD');
    return async function(dispatch) {
        try {
            const url = "https://api.rawg.io/api/games?key=" + apiKey 
                + "&dates=" + monthAgo + "," + actualDate 
                + "&platforms=18,1,7"
                +"&search=" + encodeURIComponent(query);

            const gamesResponse = await axios.get(url);
            
            const games = gamesResponse.data.results.slice(0, 10); 

            // 2. Para cada juego, obtener su screenshot principal
            const gamesWithImages = await Promise.all(
                games.map(async (game) => {
                    try {
                        const screenshotRes = await axios.get(
                            "https://api.rawg.io/api/games/" + game.id + "/screenshots?key=" + apiKey
                        );
                        const screenshots = screenshotRes.data.results;
                        const image = screenshots.length > 0 ? screenshots[0].image : null;

                        return {
                            ...game,
                            screenshot: image
                        };
                    } catch (err) {
                        console.warn("No se pudo obtener screenshots del juego" + game.name );
                        return {
                            ...game,
                            screenshot: null
                        };
                    }
                })
            );

            // 3. Dispatch al store
            dispatch({
                type: SET_RECENT_GAMES,
                payload: gamesWithImages
            });

        } catch (error) {
            console.error("Error al obtener juegos recientes:", error);
        }
    };
}
