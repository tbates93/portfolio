import React, { Component } from 'react';
import './App.css';
import scrollToComponent from 'react-scroll-to-component';
import Headroom from 'react-headroom'

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

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="orangeHeader">
            <div className="flex">
              <span className="name" onClick={() => scrollToComponent(this.section1, { offset: -60, align: 'top', duration: 800 })}>TRAVIS BATES</span>
            </div>
            <div className="links">
              <a onClick={() => scrollToComponent(this.section2, { offset: -60, align: 'top', duration: 800 })} className="link">About</a>
              <a onClick={() => scrollToComponent(this.section3, { offset: -60, align: 'top', duration: 800 })} className="link">Skills</a>
              <a onClick={() => scrollToComponent(this.section4, { offset: -60, align: 'top', duration: 800 })} className="link">Projects</a>
              <a onClick={() => scrollToComponent(this.section5, { offset: -60, align: 'top', duration: 800 })} className="link">Contact</a>

            </div>
          </div>
          <div className="bluePadding"></div>
        <div className="section1" ref={(section) => { this.section1 = section; }}>


          <span className="welcome">Welcome.</span>

          <span onClick={() => scrollToComponent(this.section2, { offset: -60, align: 'top', duration: 800 })} className="bounce">&#x2193;</span>

        </div>
        <div ref={(section) => { this.section2 = section; }} className="section2">
          <div className="sectionContainer">
            <span className="sectionHeading">me.</span>
          </div>
        </div>
        <div ref={(section) => { this.section3 = section; }} className="section3">
        <div className="sectionContainer">
            <span className="sectionHeading">Skills</span>
            <div className="skillsContainer">
              <img src={html} className="iconContainer"/>
              <img src={css3} className="iconContainer"/>
              <img src={jscript} className="iconContainer"/>
              <img src={nodejs} className="iconContainer"/>
              <img src={postgres} className="iconContainer"/>
              <img src={reactlogo} className="iconContainer"/>
              <img src={sasslogo} className="iconContainer"/>
              <img src={git} className="iconContainer"/>
              <img src={indes} className="iconContainer"/>
              <img src={illust} className="iconContainer"/>
            </div>
          </div>
        </div>
        <div ref={(section) => { this.section4 = section; }} className="section3">
        <div className="sectionContainer">
            <span className="sectionHeading">Projects</span>
          </div>
        </div>
        <div ref={(section) => { this.section5 = section; }} className="section4">
        <div className="sectionContainer">
            <span className="sectionHeading">Contact</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
