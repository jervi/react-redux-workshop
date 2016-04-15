import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import DevTools from './containers/DevTools';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const ws = new WebSocket('ws://twitterws.herokuapp.com');
const MAX_TWEETS = 100;
const store = configureStore();

ws.onmessage = ms => {
  const tweet = JSON.parse(ms.data);
  if (store.getState().tweets.size < MAX_TWEETS) {
    store.dispatch({type: 'TWEET_RECEIVED', payload: tweet});
  }
};

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.querySelector('#app')
);
