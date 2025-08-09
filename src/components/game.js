import React, { Component } from "react";


class Game extends Component {
    render() {
        const { recentGames } = this.props;

        if (!recentGames || recentGames.length === 0) return null

        return  recentGames.slice(0, 5).map((game, index) => (
            <li className="recent-games-item" key={index}>
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