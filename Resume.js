import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    return (
      <section id="resume">
         <div className="row education">
            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
                  <div className="row item">
                      <div className="twelve columns">
                        <h3>Georgia Southwestern State University</h3>
                        <p className="info">                          
                        <span>&bull;</span> <em className="date">August 2023</em>
                        </p>
                        <p>
                        Bachelor of Science in Computer Science
                        </p>
                      </div>
                  </div>                
            </div>
         </div>
      </section>
    );
  }
}