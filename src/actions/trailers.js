import { SET_RECENT_TRAILERS } from './types';
import axios from 'axios';

export function fetchRecentTrailers() {
    return async function(dispatch) {
        try {
            // 1. Obtener juegos recientes
            const trailersResponse = await axios.get(
                "https://api.rawg.io/api/games?key=6411674ed3e4418196f6efd342631dcb&dates=2025-01-01,2025-08-09&platforms=18,1,7"
            );
            const trailers = trailersResponse.data.results.slice(0, 5);  // Limitar a 5 juegos

            // 2. Para cada juego, obtener sus trailers (videos)
            const gamesWithTrailers = await Promise.all(
                trailers.map(async (trailer) => {
                    try {
                        // Cambiar 'game.id' a 'trailer.id'
                        const trailersRes = await axios.get(
                            "https://api.rawg.io/api/games/"+trailer.id+"/movies?key=6411674ed3e4418196f6efd342631dcb"
                        );
                        const trailersData = trailersRes.data.results || [];

                        return {
                            ...trailer,
                            trailers: trailersData.length > 0 ? trailersData : []  // Si no hay trailers, asignamos un array vacío
                        };
                    } catch (err) {
                        console.warn("No se pudo obtener trailers para el juego", trailer.name);
                        return {
                            ...trailer,
                            trailers: [] // Si hay error, devolvemos trailers vacíos
                        };
                    }
                })
            );

            // 3. Dispatch al store
            dispatch({
                type: SET_RECENT_TRAILERS,
                payload: gamesWithTrailers
            });

        } catch (error) {
            console.error("Error al obtener trailers recientes:", error);
        }
    };
}
