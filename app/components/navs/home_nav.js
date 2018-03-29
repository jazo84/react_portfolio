import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {HomeStyles} from './../styles/home.js';

export default class HomeNav extends Component {
  render() {
    return (
      <div className="row" style={HomeStyles.navRow}>
      <div style={HomeStyles.nav} className="col-sm-4">
      </div>
      <div style={HomeStyles.nav} className="col-sm-1 nav">
        <Link to='/'>
          <p style={HomeStyles.navText}>Home</p>
        </Link>
      </div>
        <div style={HomeStyles.nav} className="col-sm-1">
          <Link to='/aboutme'>
            <p style={HomeStyles.navText}>About Me</p>
          </Link>
        </div>
        <div style={HomeStyles.nav} className="col-sm-1">
          <Link to='/projects'>
            Projects
          </Link>
        </div>
        <div style={HomeStyles.nav} className="col-sm-1">
          <Link to='/resume'>
            Resume/Skills
          </Link>
        </div>
        <div style={HomeStyles.nav} className="col-sm-2">
          <Link to='/email'>
            Contact Me
          </Link>
        </div>
      </div>
    );
  }
};
