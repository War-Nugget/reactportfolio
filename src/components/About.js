import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/profilepic.png" alt="Profile Picture" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>
                 Hello my name is Sahil Patel and welcome to my portfolio. I am currently in college and am takeing a fullstack developer bootcamp at Georgia Tech. I am 21 years old and have been working with computers for over 7 years.            
               </p>
            </div>
         </div>
      </section>
    );
  }
}