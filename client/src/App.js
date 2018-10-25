import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import FullpageLayout from './components/layout/FullpageLayout';

import './style/Variables.scss';
import './style/Landing.scss';
import './style/About.scss';
import './style/Contact.scss';
import './style/Work.scss';
import './style/ProjectCard.scss';
import './libs/normalize.scss';
import './style/FullpageLayout.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <FullpageLayout />
        </div>
      </Router>
    );
  }
}

export default App;
