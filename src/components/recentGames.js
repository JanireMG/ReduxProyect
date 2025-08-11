import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Game from './game';


class RecentGames extends Component {

    componentDidMount() {
        this.props.fetchRecentGames();
    }


    renderGames = () => {

        return (
            <Game recentGames={this.props.recentGames}/>
        )
        
    }
    render() {
        return (
            <div className="recent-games">
                <div className="recent-games-wrapper">
                    <div className="recent-games-heading">Recent Games</div>
                    <ul className="recent-games-posts" >
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