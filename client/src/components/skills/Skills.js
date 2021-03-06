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

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="skills-title display-3 mb-4 text-center">
                Skills
              </h1>
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
      </div>
    );
  }
}

export default Skills;
