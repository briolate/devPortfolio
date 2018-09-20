import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import FullpageLayout from './components/layout/FullpageLayout';

import './style/Landing.css';
import './style/About.css';
import './libs/normalize.css';
import './style/FullpageLayout.css';

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
