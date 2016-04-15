import React from 'react';
import TweetFeed from '../components/TweetFeed';
import Link from './Link';
import { connect } from 'react-redux';

const App = (props) => (
  <div>
    <div className='app-header'>
      <div>
        <h1 className='heading'>Twitter redux stuff</h1>
        <div className='menu-item'>
          <Link to='/' className='img img-icon img-icon-dashboard'/>
          <Link to='/feed' className='img img-icon img-icon-settings'/>
        </div>
      </div>
    </div>
    {props.route === '/feed' ?  <TweetFeed /> : <div>Hello World!</div>}
  </div>
);

export default connect(state => ({route: state.route}))(App);
