import React, {PropTypes} from 'react';
import { changeRoute } from '../reducers/route';
import { connect } from 'react-redux';

const Link = (props) =>
  <a href={`#${props.to}`} onClick={() => props.dispatch(changeRoute(props.to))} className={props.className} />;

export default connect()(Link);
