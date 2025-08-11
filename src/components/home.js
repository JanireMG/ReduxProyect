import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';

import Logo from './logo';
import SearchBar from './searchBar';
import RecentGames from './recentGames';
import Icons from './helpers/icons';

export default class Home extends Component {
  handleSearchBarSubmit= (query) => {
    this.props.history.push("/results?query="+ encodeURIComponent(query));
  }

  render() {
    return (
      <div>
        <div>
          <Logo/>
          <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query) }/>
          <RecentGames/>
        </div>
      </div>
    );
  }
}