import tweetReducer from './tweets';
import routeReducer from './route';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tweets: tweetReducer,
  route: routeReducer
});

export default rootReducer;
