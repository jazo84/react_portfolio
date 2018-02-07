import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {ProjectStyles} from './../styles/projects.js';

export default class HomeNav extends Component {
  render() {
    return (
      <div className="row" style={ProjectStyles.navRow}>
        <div style={ProjectStyles.nav} className="col-sm-1">
          <Link to='/'>
            Home
          </Link>
        </div>
        <div style={ProjectStyles.nav} className="col-sm-1">
          <Link to='/aboutme'>
            About Me
          </Link>
        </div>
        <div style={ProjectStyles.nav} className="col-sm-1">
          <Link to='/blog'>
            Blog
          </Link>
        </div>
        <div style={ProjectStyles.nav} className="col-sm-1">
          <Link to='/email'>
            Email
          </Link>
        </div>
      </div>
    );
  }
};
