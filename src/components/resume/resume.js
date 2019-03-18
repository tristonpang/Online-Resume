import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              
              <div className="twelve columns">
                <img className="resume-pic" src="images/nus_logo.png" alt />
                <h3>National University of Singapore</h3>
                <p className="info">Bachelor of Computing (Honours) in Computer Science <br /><span>•</span> <em className="date">August 2017 - Present</em></p>
                <p></p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <img className="resume-pic" src="images/capt_logo.png" alt />
                <h3>College of Alice & Peter Tan (CAPT)</h3>
                <p className="info">University Town College Programme (UTCP) <br /><span>•</span> <em className="date">August 2017 - Present</em></p> 
                <p>
                  Through its multidisciplinary curriculum, the UTCP helps students develop effective communications and strong writing skills, critical thinking skills, 
                  and intellectual breadth and rigour to tackle the complex, inter-related challenges confronting the world today. 
                  A host of informal learning activities, such as talks by distinguished visitors, as well as social and sporting activities, complements the formal curriculum.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <img className="resume-pic" src="images/nebtree_logo.png" alt />
                <h3>NebulasTree Private Limited</h3>
                <p className="info">Intern (Software Development) <span>•</span> <em className="date">Dec 2018 - Jan 2019</em></p>
                <p>
                  NebulasTree is a start-up that specialises in software engineering and cybersecurity.
                  In my time as an intern there, I was tasked to develop a One-Time Password (OTP) mobile authenticator system for iOS platforms.
                  In the span of a month, I created from scratch the client-side aspect of the system, despite being unfamiliar with Swift and Xcode.
                  I think on my feet, and I took up this job to challenge myself and learn something new in a short period of time.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <img className="resume-pic" src="images/nus_logo.png" alt />
                <h3>National University of Singapore</h3>
                <p className="info">Teaching Assistant <span>•</span> <em className="date">Jan 2018 - Present</em></p>
                <p>
                  I have conducted lessons for two modules in NUS: CS2030 Programming Methodology II and CS2103/T Software Engineering.
                  Tutoring for CS2030 involved preparing lesson materials and conducting lab sessions, while in CS2103/T I was placed in charge
                  of two student teams, and was responsible for the grading and guidance of the software engineering projects that each team was developing.
                  Tutoring is meaningful to me, as it allows me to revise and hone my skills, as well as inspire fellow aspiring developers.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <img className="resume-pic" src="images/steady_logo.png" alt />
                <h3>Steady</h3>
                <p className="info">Founder, Lead Developer <span>•</span> <em className="date">September 2018 - Present</em></p>
                <p>
                  Steady is a lifestyle marketplace mobile application catered to the hearing impaired. The idea was first formulated during a hackathon, 
                  and has since developed into a social enterprise. Steady is currently a work-in-progress.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Extra-curricular
      ----------------------------------------------- */}
        <div className="row cca work">
          <div className="three columns header-col">
            <h1><span>Extra-Curricular</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <img src="images/captslock.jpg" alt />
                <h3>CAPTs_Lock</h3>
                <p className="info">Founder <span>•</span> <em className="date">December 2017 - Present</em></p>
                <p>
                  CAPTs_Lock is a interest group in the College of Alice & Peter Tan that seeks to educate and empower with technology and programming.
                  Through CAPTs_Lock, I have spearheaded and developed multiple initiatives: <br />
                  •	Worked on portable electronic registration system that keeps track of attendance via QR code scanning, 
                  now adopted by the College for all events requiring registration. <br />
                  •	Worked on software to aid with residence allocation for incoming students
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <img src="images/intheloop.png" alt />
                <h3>NUS Orbital</h3>
                <p className="info">Participant <span>•</span> <em className="date">May 2018 - Aug 2018</em></p>
                <p>
                  Orbital is an independent software development project offered by NUS. Under this project, I developed 
                  a mobile application called InTheLoop – a student event planning and management system. This application is currently being 
                  adapted for use in CAPT.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <img src="images/csc.jpg" alt />
                <h3>CAPT College Students' Committee</h3>
                <p className="info">Director of Publicity <span>•</span> <em className="date">May 2018 - Present</em></p>
                <p>
                  The College Students’ Committee represents the college’s student body and addresses their needs. As the Director of Publicity,
                  I oversaw dynamics of student life and managed publicity campaigns, materials and the corporate image of the College. I led a team 
                  of 22 student leaders and oversaw their personal development as well.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Extra Curricular */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
              I am primarily a software engineer, and can contribute to the code base and structure of any software project in development. 
              Although I am more familiar with mobile development and back-end development, I am willing to learn new skills, 
              languages or frameworks as required by the company. I am a very focused and driven individual, 
              and as an intern I always give my full commitment and dedication to the task at hand.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand java" /><em>Java</em></li>
                <li><span className="bar-expand python" /><em>Python</em></li>
                <li><span className="bar-expand android" /><em>Mobile Development (Android)</em></li>
                <li><span className="bar-expand web" /><em>Web Development</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>
      </React.Fragment>
    );
  }
}