import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center landing-header">
              <h1 className="display-3 mb-4 landing-title">
                Evan Arthur Briolat
              </h1>
              <p className="landing-lead">Welcome to my world.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
