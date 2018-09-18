import React, { Component } from 'react';

import '../../style/Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center intro">
              <h1 className="display-3 mb-4 title">Evan Arthur Briolat</h1>
              <p className="lead">Welcome to my life.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
