import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './searchBar';
import RecentGames from './recentGames';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Logo/>
          <SearchBar/>
          <RecentGames/>
        </div>
      </div>
    );
  }
}