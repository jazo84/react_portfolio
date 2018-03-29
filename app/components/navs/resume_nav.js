import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {ResumeStyles} from './../styles/resume.js';

export default class ResumeNav extends Component {
  render() {
    return (
      <div className="row" style={ResumeStyles.navRow}>
        <div style={ResumeStyles.nav} className="col-sm-2">
          <Link to='/'>
            Home
          </Link>
        </div>
        <div style={ResumeStyles.nav} className="col-sm-2">
          <Link to='/projects'>
            Projects
          </Link>
        </div>
        <div style={ResumeStyles.nav} className="col-sm-2">
          <Link to='/aboutme'>
            About Me
          </Link>
        </div>
        <div style={ResumeStyles.nav} className="col-sm-2">
          <Link to='/email'>
            Email
          </Link>
        </div>
      </div>
    );
  }
};
