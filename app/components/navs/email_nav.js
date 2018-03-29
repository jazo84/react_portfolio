import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {EmailStyles} from './../styles/email.js';

export default class EmailNav extends Component {
  render() {
    return (
      <div className="row" style={EmailStyles.navRow}>
        <div style={EmailStyles.nav} className="col-sm-2">
          <Link to='/'>
            Home
          </Link>
        </div>
        <div style={EmailStyles.nav} className="col-sm-2">
          <Link to='/projects'>
            Projects
          </Link>
        </div>
        <div style={EmailStyles.nav} className="col-sm-2">
          <Link to='/resume'>
            Resume/Skills
          </Link>
        </div>
        <div style={EmailStyles.nav} className="col-sm-2">
          <Link to='/aboutme'>
            About Me
          </Link>
        </div>
      </div>
    );
  }
};
