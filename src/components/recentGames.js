import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class RecentGames extends Component {

    componentDidMount() {
        this.props.fetchRecentGames();
    }

    renderGames = () => {
        if (!this.props.recentGames) return null;

        return this.props.recentGames
            .slice(0, 5)  
            .map((game, index) => (
                <li className='recent-games-item' key={index}>
                    <p className='recent-games-names'>{game.name}</p>
                    {game.screenshot && <img className='recent-game-img' src={game.screenshot} alt={game.name} />}
                </li>
            ));
        }

    render() {
        return (
            <div className="recent-games">
                <div className="recent-games-wrapper">
                    <div className="recent-games-heading">Recent Games</div>
                    <ul className="recent-games-posts">
                        {this.renderGames()}
                    </ul>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        recentGames: state.games.recentGames
    }
}

export default connect(mapStateToProps, actions)(RecentGames);