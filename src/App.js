import React, { Component } from 'react';
import './App.css';
import scrollToComponent from 'react-scroll-to-component';
import Headroom from 'react-headroom'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


import logo from "./assets/tb square logo.svg"
import rectlogo from "./assets/tb rect logo.svg"
import illust from "./assets/adobe-illustrator-cc.svg"
import css3 from "./assets/css3-original.svg"
import git from "./assets/git-plain.svg"
import html from "./assets/html5-original.svg"
import indes from "./assets/indesign-cc.svg"
import jscript from "./assets/javascript-original.svg"
import nodejs from "./assets/nodejs-original.svg"
import postgres from "./assets/postgresql-plain.svg"
import reactlogo from "./assets/react-original.svg"
import sasslogo from "./assets/sass-original.svg"

import linkedin from "./assets/linkedin-plain.svg"
import twitter from "./assets/twitter-original.svg"
import github from "./assets/github-original.svg"
import email from "./assets/close-envelope.svg"

import laserImage from "./assets/Screen Shot 2017-12-03 at 3.31.26 PM.jpg"
import toDue from "./assets/Screen Shot 2017-12-03 at 8.25.53 PM.jpg"


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="orangeHeader">
          <div className="flex">
            <img onClick={() => scrollToComponent(this.section1, { offset: -85, align: 'top', duration: 800 })} src={rectlogo} className="logo" />
          </div>
          <div className="links">
            <a onClick={() => scrollToComponent(this.section2, { offset: -85, align: 'top', duration: 800 })} className="link">About</a>
            <a onClick={() => scrollToComponent(this.section3, { offset: -200, align: 'top', duration: 800 })} className="link">Skills</a>
            <a onClick={() => scrollToComponent(this.section4, { offset: -85, align: 'top', duration: 800 })} className="link">Projects</a>
            <a onClick={() => scrollToComponent(this.section5, { offset: -70, align: 'top', duration: 800 })} className="link">Contact</a>

          </div>
        </div>
        <div className="bluePadding"></div>
        <div className="section1" ref={(section) => { this.section1 = section; }}>


          <span className="welcome">Welcome.</span>

          <span onClick={() => scrollToComponent(this.section2, { offset: -85, align: 'top', duration: 800 })} className="bounce">&#x2193;</span>

        </div>
        <div ref={(section) => { this.section2 = section; }} className="section2">
          <div className="sectionContainer">
            <span className="sectionHeading">Hi. I’m Travis.</span>
            <ScrollAnimation animateIn="fadeIn" offset={300} animateOnce={true}>
              <span className="aboutMe">I’m a web developer and designer from Utah.<br/> I focus on building quality web applications that solve real problems for real people. I love being able to write code and see my designs come to life. I also love my wife and baby girl.</span>
            </ScrollAnimation>
            <span onClick={() => scrollToComponent(this.section3, { offset: -200, align: 'top', duration: 800 })} className="bounce2">&#x2193;</span>

          </div>
        </div>
        <div className="halfC">Skills</div>
        <div ref={(section) => { this.section3 = section; }} className="section3">
          <div className="sectionContainerSkills">
            {/* <span className="sectionHeading">Skills</span> */}
            <div className="skillsContainer">
              <ScrollAnimation  offset={300} animateOut="flipOutX" animateIn="flipInX">
                <img src={html} className="iconContainer" />
              </ScrollAnimation>

              <ScrollAnimation  offset={300} animateOut="flipOutX" animateIn="flipInX">
                <img src={css3} className="iconContainer" />
              </ScrollAnimation>

              <ScrollAnimation  offset={300} animateOut="flipOutX" animateIn="flipInX">
                <img src={jscript} className="iconContainer" />
              </ScrollAnimation>

              <ScrollAnimation  offset={300} animateOut="flipOutX" animateIn="flipInX">
                <img src={nodejs} className="iconContainer" />
              </ScrollAnimation>

              <ScrollAnimation  offset={300} animateOut="flipOutX" animateIn="flipInX">
                <img src={postgres} className="iconContainer" />
              </ScrollAnimation>

              <ScrollAnimation  offset={300} animateOut="flipOutX" animateIn="flipInX">
                <img src={reactlogo} className="iconContainer" />
              </ScrollAnimation>

              <ScrollAnimation  offset={300} animateOut="flipOutX" animateIn="flipInX">
                <img src={sasslogo} className="iconContainer" />
              </ScrollAnimation>

              <ScrollAnimation  offset={300} animateOut="flipOutX" animateIn="flipInX">
                <img src={git} className="iconContainer" />
              </ScrollAnimation>

              <ScrollAnimation  offset={300} animateOut="flipOutX" animateIn="flipInX">
                <img src={indes} className="iconContainer" />
              </ScrollAnimation>

              <ScrollAnimation  offset={300} animateOut="flipOutX" animateIn="flipInX">
                <img src={illust} className="iconContainer" />
              </ScrollAnimation>

            </div>
          </div>
        </div>
        <div ref={(section) => { this.section4 = section; }} className="section4">
          <div className="sectionContainer">
            <span className="sectionHeadingProj">Projects</span>
            <div className="projectContainer">
              <div className="project">
                <a href="http://laser.travisbates.win"><img className="projImage" src={laserImage}/></a>
                <span className="projectTitle">Laser Express App</span>
                <a className="projectLink"  href="http://laser.travisbates.win">laser.travisbates.win</a>
                <span>- Full stack web app that allows tracking and dispatching service requests called in/submitted, that I built in 2 weeks.</span>
                <span>- React/SASS on the front end and Node.js with PostgreSQL and massive for the backend.</span>
                <span>- D3 used to render line charts based on the numbers of recent calls.</span>
                <span  style={{marginBottom: '2vh'}}>- Was voted “Best Solution for a Business” out of 24 projects at DevMountain, and is currently being used by Laser Express.</span>
                
              </div>
              <div className="project">
                <a href="http://todue.date"><img className="projImage" src={toDue}/></a>
                <span className="projectTitle">Due.</span>
                <a className="projectLink" href="http://todue.date">todue.date</a>
                <span>- Shared calendar application for tracking college assignments, due dates, and completed assignments.</span>
                <span>- Uses an asynchronous fetch to retrieve a list of all schools in the US that can be selected and added to a user’s profile.</span>
                <span>- Shows current classes at a school, which users can subscribe to while having individual to-do items for assignments.</span>
                <span style={{marginBottom: '2vh'}}>- Chart.js used to show insights into classes, such as the number of individuals in a class who have completed an assignment.</span>
                
              </div>
             
            </div>
          </div>
          
        </div>
        <div ref={(section) => { this.section5 = section; }} className="section5">
          <div className="sectionContainer">
            <span className="sectionHeading">Contact</span>
            <div className="contactIcons">
              <a href="https://twitter.com/travbates"><img className="contactIcon" src={twitter}/></a>
              <a href="https://www.linkedin.com/in/travis-d-bates/"><img className="contactIcon" src={linkedin}/></a>
              <a href="https://github.com/tbates93/"><img className="contactIcon" src={github}/></a>
              <a href="mailto:travbates93@gmail.com?subject=Contact Travis Bates"><img className="contactIcon" src={email}/></a>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
