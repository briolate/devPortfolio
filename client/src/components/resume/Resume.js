import React, { Component } from 'react';

import PDF from '../../img/Evan_Briolat_Resume.pdf';

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="resume-title display-3 mb-4 text-center">
                Resume
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
