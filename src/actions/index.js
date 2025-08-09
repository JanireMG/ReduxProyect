import { SET_RECENT_GAMES } from './types';
import moment from 'moment'

import axios from 'axios';

export function fetchRecentGames() {
    //const apiKey= "6411674ed3e4418196f6efd342631dcb";
    //const monthAgo= moment().format('YYYY-MM-DD');
    //const actualDate=moment().subtract(1, 'month').format('YYYY-MM-DD');
    return async function(dispatch) {
        try {
            const gamesResponse = await axios.get(
                "https://api.rawg.io/api/games?key=6411674ed3e4418196f6efd342631dcb&dates=2025-01-01,2025-08-09&platforms=18,1,7"
            )
            const games = gamesResponse.data.results.slice(0, 5); // Limitar a 5 juegos

            // 2. Para cada juego, obtener su screenshot principal
            const gamesWithImages = await Promise.all(
                games.map(async (game) => {
                    try {
                        const screenshotRes = await axios.get(
                            "https://api.rawg.io/api/games/" + game.id + "/screenshots?key=6411674ed3e4418196f6efd342631dcb"
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
