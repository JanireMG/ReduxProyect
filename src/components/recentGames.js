import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="recent-games">
                <div className="recent-games-wrapper">
                    <div className="recent-games-heading">Recent Games</div>
                    <ul className="recent-games-posts">
                        <li>recent post 0</li>
                        <li>recent post 1</li>
                        <li>recent post 2</li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default SearchBar;