import {List} from 'immutable';

export default function tweetReducer(state=List(), action) {
  if (action.type === 'TWEET_RECEIVED') {
    return state.push(action.payload);
  }
  return state;
}

