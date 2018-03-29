import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {AboutMeStyles} from './../styles/aboutme.js';

export default class AboutMeNav extends Component {
  render() {
    return (
      <div className="row" style={AboutMeStyles.navRow}>
        <div style={AboutMeStyles.nav} className="col-sm-2">
          <Link to='/'>
            Home
          </Link>
        </div>
        <div style={AboutMeStyles.nav} className="col-sm-2">
          <Link to='/projects'>
            Projects
          </Link>
        </div>
        <div style={AboutMeStyles.nav} className="col-sm-2">
          <Link to='/resume'>
            Resume/Skills
          </Link>
        </div>
        <div style={AboutMeStyles.nav} className="col-sm-2">
          <Link to='/email'>
            Contact Me
          </Link>
        </div>
      </div>
    );
  }
};
