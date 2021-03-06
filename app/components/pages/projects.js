import React, {Component} from 'react';
import Collapsible from 'react-collapsible';

import {ProjectStyles} from '../styles/projects.js';
import ProjectNav from '../navs/project_nav';


export default class Projects extends Component {
  render() {
    return (
    <div>
      <ProjectNav />
      <img style={ProjectStyles.background_image} src="http://gdurl.com/hwLF"/><br></br>
      <div>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-header">Article Page</h5>
                <p className="card-text">A mock-up of an article page within a News website.</p>
                <a href="http://afternoon-meadow-71190.herokuapp.com/"><img style={ProjectStyles.project2} src="http://gdurl.com/9jQC"/></a>
                <br></br>
                <a href="http://afternoon-meadow-71190.herokuapp.com/" className="btn btn-primary">Visit Page</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-header">Corporate Event Webpage</h5>
                <p className="card-text">A re-design of an annual corporate event website.</p>
                <a href="http://www.cvent.com/events/keys-to-negotiating-better-software-agreements-and-software-as-a-service-agreements/event-summary-933c1f575fc0429596ed5bbe6ab40202.aspx"><img style={ProjectStyles.project1} src="http://gdurl.com/DJ7M"/></a>
                <br></br>
                <a href="http://www.cvent.com/events/keys-to-negotiating-better-software-agreements-and-software-as-a-service-agreements/event-summary-933c1f575fc0429596ed5bbe6ab40202.aspx" className="btn btn-primary">Visit Page</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-header">Task Manager App</h5>
                <p className="card-text">Group Project - App to manage simple daily tasks.</p>
                <a href="#"><img style={ProjectStyles.project3} src="https://i.imgur.com/dk3aQXj.png"/></a>
                <br></br>
                <a href="#" className="btn btn-primary">Visit Page</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
};
