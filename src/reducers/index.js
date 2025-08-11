import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import games from './gamesReducers';
import searchReducer from './searchGameReducer';

const rootReducer = combineReducers({
  form,
  games,
  search: searchReducer,
});

export default rootReducer;