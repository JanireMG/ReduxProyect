import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import games from './gamesReducers';
import trailers from './trailerReducers';

const rootReducer = combineReducers({
  form,
  games,
  trailers
});

export default rootReducer;