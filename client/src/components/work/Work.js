import React, { Component } from 'react';
import HypeningsCard from './project-cards/Hypenings';

class Work extends Component {
  render() {
    return (
      <div className="work">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="work-title display-3 mb-4 text-center">Work</h1>
              <div className="grid">
                <div className="item item-1">
                  <HypeningsCard />
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
        </div>
      </div>
    );
  }
}

export default Work;
