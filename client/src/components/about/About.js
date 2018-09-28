import React, { Component } from 'react';

import JavascriptIcon from '../../svg/JavascriptIcon';
import HtmlIcon from '../../svg/HtmlIcon';
import CssIcon from '../../svg/CssIcon';
import BootstrapIcon from '../../svg/BootstrapIcon';
import JqueryIcon from '../../svg/JqueryIcon';
import ReactIcon from '../../svg/ReactIcon';
import MongoIcon from '../../svg/MongoIcon';
import AngularIcon from '../../svg/AngularIcon';
import ExpressIcon from '../../svg/ExpressIcon';
import NodeIcon from '../../svg/NodeIcon';
import PostgresqlIcon from '../../svg/PostgresqlIcon';
import SassIcon from '../../svg/SassIcon';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-4 mb-4 about-title text-center">About</h1>
            <div className="about-paragraphs pl-5">
              <p className="about-text">
                My name is Evan and I am a web developer/designer currently
                focused on the MERN stack, although I'm always up for a new
                challenge.
              </p>
              <p className="about-text">
                I received a bachelor's degree in advertising from Michigan
                State University in 2011 but have mostly focused on coding
                since. After teaching myself for a few years, I enrolled in a
                front-end bootcamp in Detroit and had a wonderful experience.
              </p>
              <p className="about-text">
                Outside the web, I enjoy playing guitar and piano, collecting
                records, painting, reading, running, traveling, golfing, and
                eating everything in sight.
              </p>
              <p className="about-text">
                I am always seeking new opportunities to code with others,
                whether it be on a personal or large-scale project. Feel free to
                email me using the contact form below.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="flex-container">
              <div className="flex-item card-body">
                <JavascriptIcon />
              </div>
              <div className="flex-item card-body">
                <HtmlIcon />
              </div>
              <div className="flex-item card-body">
                <CssIcon />
              </div>
            </div>
            <div className="flex-container">
              <div className="flex-item card-body">
                <BootstrapIcon />
              </div>
              <div className="flex-item card-body">
                <JqueryIcon />
              </div>
              <div className="flex-item card-body">
                <ReactIcon />
              </div>
            </div>
            <div className="flex-container">
              <div className="flex-item card-body">
                <MongoIcon />
              </div>
              <div className="flex-item card-body">
                <NodeIcon />
              </div>
              <div className="flex-item card-body">
                <ExpressIcon />
              </div>
            </div>
            <div className="flex-container">
              <div className="flex-item card-body">
                <AngularIcon />
              </div>
              <div className="flex-item card-body">
                <PostgresqlIcon />
              </div>
              <div className="flex-item card-body">
                <SassIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
