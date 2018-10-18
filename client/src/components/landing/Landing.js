import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center landing-header">
              <h1 className="display-3 mb-4 landing-title">
                <div className="word1">
                  <span className="char1">E</span>
                  <span className="char2">v</span>
                  <span className="char3">a</span>
                  <span className="char4">n</span>
                </div>
                <div className="word2">
                  <span className="char5">A</span>
                  <span className="char6">r</span>
                  <span className="char7">t</span>
                  <span className="char8">h</span>
                  <span className="char9">u</span>
                  <span className="char10">r</span>
                </div>
                <div className="word3">
                  <span className="char11">B</span>
                  <span className="char12">r</span>
                  <span className="char13">i</span>
                  <span className="char14">o</span>
                  <span className="char15">l</span>
                  <span className="char16">a</span>
                  <span className="char17">t</span>
                </div>
              </h1>
              <div className="landing-lead">
                <p>Welcome to my world</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
