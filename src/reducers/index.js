import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import games from './gamesReducers';

const rootReducer = combineReducers({
  form,
  games
});

export default rootReducer;