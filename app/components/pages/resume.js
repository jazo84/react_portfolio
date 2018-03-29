import React, {Component} from 'react';
import Collapsible from 'react-collapsible';

import {ResumeStyles} from '../styles/resume.js';
import ResumeNav from '../navs/resume_nav';
//import ResumeCollapse from '../collapsible/resume.js';

export default class Resume extends Component {
  render() {
    return (
      <div>
        <ResumeNav />
        <img style={ResumeStyles.background_image} src="http://gdurl.com/hwLF"/><br></br>
        <div style={ResumeStyles.body_text}>
          <h2> My Experience</h2>
          <Collapsible id="collapse" trigger="Key Accomplishments">
            <ul>
              <li className="glyphicon glyphicon-chevron-right"> Successfully managed the marketing for the largest legal technology tradeshow in the legal industry.</li>
              <li className='glyphicon glyphicon-chevron-right'> Surpassed the set attendee revenue goal and attendance goal for the Legaltech tradeshow in 2014 and 2015 by more than 9% and 8%, respectively.</li>
              <li className='glyphicon glyphicon-chevron-right'> Managed the logistics, marketing, and launch of five Legaltech Mobile Apps</li>
              <li className='glyphicon glyphicon-chevron-right'> Designed and helped execute the launch of ALM events “Signature Event Series” Website</li>
              <li className='glyphicon glyphicon-chevron-right'> Streamlined ExL Events, Inc online registration process through Cvent.com</li>
              <li className='glyphicon glyphicon-chevron-right'> Successfully integrated ALM’s legal events on the new eTouches platform</li>
              <li className='glyphicon glyphicon-chevron-right'> Designed and launched successful email campaigns which increased open rates to over 20% and click-through rates to over 2%.</li>
              <li className='glyphicon glyphicon-chevron-right'> Successfully managed the entire marketing campaign for the Digital Pharma Event Series and grew revenue from $564,556.72 in 2010 to 1.2 million dollars in 2011.</li>
              <li className='glyphicon glyphicon-chevron-right'> Successfully implemented lead nurturing campaign in Marketo which increased quality leads to sales by 10%</li>
              <li className='glyphicon glyphicon-chevron-right'> Grew the Digital Pharma Event series from 134 paying attendees in 2010 to 600 total attendees in 2011.</li>
              <li className='glyphicon glyphicon-chevron-right'> Secured and managed new printing and mailing vendors which saved ExL Events, Inc an average of 15% per year.</li>
              <li className='glyphicon glyphicon-chevron-right'> Managed all interactive/online marketing campaigns for ExL Pharma</li>
              <li className='glyphicon glyphicon-chevron-right'> Successfully managed all marketing campaigns for every event in ExL Events portfolio from 2008-2011</li>
              <li className='glyphicon glyphicon-chevron-right'> Oversaw the design, creation and execution of the new Digital Pharma Series website.</li>
            </ul>
          </Collapsible>
          <br></br>
          <p>Professional Experience</p>
          <p>ALM Media, New York, NY / June 2015-Present<br/>
             Senior Marketing Manager<br/>
             Oversee the strategy and implementation of conference marketing plans for 20+ events. Managed the execution of digital marketing plans including: copy writing and design for email blasts, Google ad words, social media (paid and organic), banner ad placement on relevant sites, and mobile apps for events. Identified and managed media partner and association partner relationships to increase attendance. Managed marketing budgets and reported metrics on all marketing plans. Create, manage
             and oversee the entire marketing plan for Legaltech New York, the largest legal technology tradeshow in the industry and Legaltech West Coast, which generate approximately 5 million and 2 million dollars respectively, each year.  Oversees the marketing coordinator in execution of all marketing plans.
          </p>
          <p>ALM Media, New York, NY / May 2012-June 2015<br/>
             Marketing Manager<br/>
             Assist in the development and execution of conference marketing plans. Manage all media partners and vendor relations. Oversee and reconcile the marketing budget for over 20 conferences.  Creation of all direct mailing plans and targeted marketing lists. Collaborate with colleagues in production, sales, meeting planning and coordination divisions. Create, manage and oversee the entire marketing plan for Legaltech New York, the largest legal technology tradeshow in the industry and Legaltech West Coast, which generate approximately 5 million and 2 million dollars respectively, each year.
          </p>
          <p>ExL Events, Inc. New York, NY / July 2008-May 2012<br/>
             Senior Marketing Manager<br/>
             Oversee the development and execution of conference marketing plans. Manage all media partners and vendor relations. Oversee and reconcile the marketing budget for over 40+ events.  Creation of all direct mailing plans and targeted marketing lists in Salesforce.com platform. Collaborate with colleagues in production, sales, meeting planning and coordination divisions. Conduct Market research to ensure success of current and future events. Managing the creation and execution of all marketing collateral. Leading the marketing team and management of email marketing campaigns in Marketo.
          </p>
          <p>ExL Events, Inc. New York, NY / July 2006-July 2008<br/>
             Marketing Coordinator<br/>
             Assist in the development and execution of conference marketing plans. Contribute to the consummation of partnerships with media, associations and sponsors. Work with vendor groups to support marketing efforts. Provided on-site support at conferences. Collaborate with colleagues in production, sales, meeting planning and coordination divisions. Assist in market research to ensure success of current and future events
          </p>
          <p>Chevrolet Division of General Motors, Philadelphia, PA / January 2005-May 2005<br/>
             Marketing Intern<br/>
             Conduct market research on effective ways to advertise Chevrolet’s target consumer.  Worked with Chevrolet partners on advertising to college students on campus.  Created and implemented a marketing strategy for the all-new Chevrolet Cobalt which substantially increased awareness.  Planned and marketed an event on Temple University’s main campus in which 30,000 students were present.
          </p>
        <p>Education</p>
        <p>TEMPLE UNIVERSITY, Philadelphia, PA / May 2006 Bachelor of Business Administration.  Concentrations in Marketing, Minor in Health Care Management.</p>
      </div>
    </div>
    );
  }
};
