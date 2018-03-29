import React, {Component} from 'react';

import {HomeStyles} from '../styles/home.js';
import HomeNav from '../navs/home_nav';
import FooterNav from '../navs/footer_nav';


export default class Home extends Component {
  render() {
    return (
      <div>
      <HomeNav />
      <img style={HomeStyles.background_image} src="http://gdurl.com/hwLF"/><br></br>
      <div className="container" style={HomeStyles.textDiv}>
      <div className="row">
      <div className="col-sm-12">
      <h3 style={HomeStyles.intro_text}>Front-end Developer / Seasoned Marketer</h3>
      </div>
      </div>
      <div className="row">
      <div className="col-sm-11">
      <h4 style={HomeStyles.intro2_text}>Hey! I'm Jasmaine, and I bridge the gap between business saavy and software development to deliver websites that achieve your goals and brings your vision to life</h4>
      </div>
      </div>
      </div>
      <FooterNav />
      </div>
    );
  }
};
