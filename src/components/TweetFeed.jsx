import React, {PropTypes} from "react";
import {connect} from "react-redux";
import Tweet from "../components/Tweet";

const TweetFeed = (props) => (
  <ul className="tweetlist">
    {props.tweets.map(t => <li key={t.id}><Tweet tweet={t}/></li>)}
  </ul>
);

export default connect(state => ({tweets: state.tweets}))(TweetFeed);
