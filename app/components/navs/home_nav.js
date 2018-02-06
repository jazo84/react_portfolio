import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {HomeStyles} from './../styles/home.js';

export default class HomeNav extends Component {
  render() {
    return (
      <div className="row" style={HomeStyles.navRow}>
        <div style={HomeStyles.nav} className="col-sm-4" onMouseOver={this.onHover}>
          About Me
          </div>
          <div style={HomeStyles.nav} className="col-sm-4">
          Projects
          </div>
          <div style={HomeStyles.nav} className="col-sm-4">
          Blog
          </div>
          <div style={HomeStyles.nav} className="col-sm-4">
          Email
        </div>
      </div>
    );
  }
};
