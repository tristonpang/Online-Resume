import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I am Triston Pang, a Computer Science undergraduate from the National University of Singapore (NUS). 
              I am currently seeking to secure a year-long internship in a start-up in Silicon Valley as part of the NUS Overseas Colleges Programme. I am an aspiring software developer, looking to specialize in Software Engineering. I stand by my personal belief – “empowerment through technology” 
              – as it is my aspiration to be able to design solutions and bring ideas to life in order to enable and bring benefit to others.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Triston Pang Erh Syen</span><br />
                  <span>College of Alice & Peter Tan<br />
                    8 College Avenue East<br /> 
                    Singapore 138615
                  </span><br />
                  <span>(+65) 8338 1128</span><br />
                  <span>triston.pang@u.nus.edu</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="documents" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
      </React.Fragment>
    );
  }
}