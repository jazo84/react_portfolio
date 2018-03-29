import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {FooterStyles} from './../styles/footer.js';

export default class FooterNav extends Component {
  render() {
    return (
      <div>
      <div className="footer">
      <div className="row" style={FooterStyles.navRow}>
        <div style={FooterStyles.navRow} className="col-sm-1">
          <div style={FooterStyles.icon}>
            <i className="fab fa-facebook-square"></i>
          </div>
        </div>
        <div style={FooterStyles.navRow} className="col-sm-1">
        <div style={FooterStyles.icon}>
          <i className="fab fa-linkedin"></i>
        </div>
        </div>
        <div style={FooterStyles.navRow} className="col-sm-1">
        <div style={FooterStyles.icon}>
          <i class="fab fa-github-square"></i>
        </div>
        </div>
        <div style={FooterStyles.navRow} className="col-sm-1">
        <div style={FooterStyles.icon}>
          <i class="fas fa-envelope-square"></i>
        </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
};
