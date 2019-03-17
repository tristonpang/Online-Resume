import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>
                        Triston demonstrated keen focus in his work, strong independent streak, 
                        with minimal supervision required to complete this task. 
                        He also possesses good articulation by being able to explain his thoughts and rational behind his work clearly 
                        and convincingly during the demo.
                      </p>
                      <cite>Mr Harry Wong (CEO, NebulasTree)</cite>
                    </blockquote>
                  </li> {/* slide ends */}
                  <li>
                    <blockquote>
                      <p>
                        I am convinced that with Triston’s leadership skills and positive learning attitude, he will be an
                        asset to any future projects invaluable.
                      </p>
                      <cite>Dr Toh Tai Chong (Lecturer, College of Alice & Peter Tan)</cite>
                    </blockquote>
                  </li> {/* slide ends */}
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
      </React.Fragment>
    );
  }
}