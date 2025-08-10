import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from './logo';
import SearchBar from './searchBar';
import RecentGames from './recentGames';
import Icons from './helpers/icons';
import RecentTrailers from './Trailers/recentTrailers';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Logo/>
          <SearchBar/>
          <RecentGames/>
          <RecentTrailers />
        </div>
      </div>
    );
  }
}