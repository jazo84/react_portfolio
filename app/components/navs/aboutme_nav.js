import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {AboutMeStyles} from './../styles/aboutme.js';

export default class HomeNav extends Component {
  render() {
    return (
      <div className="row" style={AboutMeStyles.navRow}>
        <div style={AboutMeStyles.nav} className="col-sm-4">
          <Link to='/'>
            Home
          </Link>
        </div>
        <div style={AboutMeStyles.nav} className="col-sm-4">
          <Link to='/projects'>
            Projects
          </Link>
        </div>
        <div style={AboutMeStyles.nav} className="col-sm-4">
          <Link to='/blog'>
            Blog
          </Link>
        </div>
        <div style={AboutMeStyles.nav} className="col-sm-4">
          <Link to='/email'>
            Email
          </Link>
        </div>
      </div>
    );
  }
};
