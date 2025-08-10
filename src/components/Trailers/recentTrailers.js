import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Trailers from './trailer';


class RecentTrailers extends Component {

    componentDidMount() {
        this.props.fetchRecentTrailers();
    }

    renderTrailers = () => {

        return (
            <Trailers recentTrailers={this.props.recentTrailers}/>
        )
        
    }
    render() {
        return (
            <div className="recent-Trailers">
                <div className="recent-trailers-wrapper">
                    <div className="recent-trailers-heading">Recent Trailers</div>
                    <ul className="recent-trailers-posts">
                        {this.renderTrailers()}
                    </ul>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        recentTrailers: state.trailers.recentTrailers
    }
}
export default connect(mapStateToProps, actions)(RecentTrailers);