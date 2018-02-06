import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {HomeStyles} from './../styles/home.js';

export default class HomeNav extends Component {
  render() {
    return (
      <div className="row" style={HomeStyles.navRow}>
        <div style={HomeStyles.nav} className="col-sm-4">
          <Link to='/aboutme'>
            About Me
          </Link>
        </div>
        <div style={HomeStyles.nav} className="col-sm-4">
          <Link to='/projects'>
            Projects
          </Link>
        </div>
        <div style={HomeStyles.nav} className="col-sm-4">
          <Link to='/blog'>
            Blog
          </Link>
        </div>
        <div style={HomeStyles.nav} className="col-sm-4">
          <Link to='/email'>
            Email
          </Link>
        </div>
      </div>
    );
  }
};
