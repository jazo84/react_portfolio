import React, {Component} from 'react';

import {HomeStyles} from '../styles/home.js';
import HomeNav from '../navs/home_nav';


export default class Home extends Component {
  render() {
    return (
      <div>
      <HomeNav />
      <h2 style={HomeStyles.intro_text}>Jasmaine John</h2>
      <h3 style={HomeStyles.intro2_text}>Let's Build Something Amazing Together</h3>
        <img style={HomeStyles.background_image} src="http://gdurl.com/hwLF"/><br></br>
      </div>
    );
  }
};
