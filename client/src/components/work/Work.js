import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div className="work">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center landing-header">
              <h1 className="display-3 mb-4 landing-title">WORK </h1>
            </div>
          </div>
          <div className="grid">
            <div className="item item-1">
              <p>WORK 1</p>
            </div>
            <div className="item item-2">
              <p>Work 2</p>
            </div>
            <div className="item item-3">
              <p>Work 3</p>
            </div>
            <div className="item item-3">
              <p>Work 4</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
