import React, { Component } from "react";


class Game extends Component {
    handleGameClick = async (gameId) => {
        const apiKey = "6411674ed3e4418196f6efd342631dcb";
        try {
            const response = await fetch(`https://api.rawg.io/api/games/${gameId}/stores?key=${apiKey}`);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                window.open(data.results[0].url, '_blank');
            } else {
                alert("No hay tiendas disponibles para este juego.");
            }
        } catch (error) {
            console.error("Error al obtener las tiendas:", error);
        }
    };
    render() {

        
        const { recentGames } = this.props;

        if (!recentGames || recentGames.length === 0) return null

        return  recentGames.slice(0, 10).map((game, index) => (
            <li className="recent-games-item" key={index}
                onClick={() => this.handleGameClick(game.id)} 
            >
                <p className="recent-games-names">{game.name}</p>
                {game.screenshot && (
                    <img
                        className="recent-game-img"
                        src={game.screenshot}
                        alt={game.name}
                    />
                )}
            </li>
        ));
    }
}
export default Game;