import React, {Component} from 'react';
import {AboutMeStyles} from '../styles/aboutme.js';
import AboutMeNav from '../navs/aboutme_nav';

export default class AboutMe extends Component {
  render() {
    return (
      <div>
      <AboutMeNav />
        <img style={AboutMeStyles.background_image} src="http://gdurl.com/hwLF"/><br></br>
        <div style={AboutMeStyles.bio}>
        <div style={AboutMeStyles.outerBio}>
          <h2 style={AboutMeStyles.headerText}>Passion. Innovation. Execution.</h2>
          <img style={AboutMeStyles.selfie}src="http://gdurl.com/wk6a"/>
          <p>Senior Marketing Manager/Full Stack Developer</p>
          <h4> Who am I?</h4>
          <p> My name is Jasmaine and I am the Senior Marketing Manager at ALM Media, where I market high-level corporate events and tradeshows for the legal industry. Marketing provided me my first hands on lesson in using technology to connect people and shape their online experience. That lesson evolved into a passion for creating unique experiences through computer programming. Although I am still new to programming, that drive and passion has only intensified as I continue to add new skills to my portfolio.</p>
          <h4>Why Coding?</h4>
          <p>Throughout my career as a marketer, I honed specific skills that (unbeknownst to me) set me on a path to computer programming. I began my career at a start-up event company where collaboration, innovation, and hands-on tactical execution was key. Part of my job, which tends to be outside the realm of a typical marketer, was maintaining/editing the website for my events. I found myself spending hours digging into the HTML/CSS, although I didn’t understand a line of code at the time, my curiosity had been peaked, and my passion found its roots. </p>
          <h4>Why I’m Different:</h4>
          <ul>
            <li><strong>Passion:</strong> There are many that CAN code, but few that LOVE to code and build something unique through a language that can be frustrating to speak. I combine a natural passion with practical training to deliver something completely unique to my clients. </li><br></br>
            <li><strong>Innovation:</strong> With over 10 years of business experience, from marketing to project management to creative design to budgeting and everything in between – I bring a creative vision shaped by your organizational/departmental goals and executed with business savvy to provide innovative digital solutions. </li><br></br>
            <li><strong>Execution:</strong> On task, on budget, and on time - A plan is only as good as the tactical execution and I provide the means to bring that groundbreaking idea to life.</li>
          </ul>
          </div>
        </div>
      </div>
    );
  }
};
