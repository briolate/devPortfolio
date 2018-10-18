import React, { Component } from 'react';
import Hypenings from '../../../img/hypenings-card.png';

class HypeningsCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="front" style={{ backgroundImage: `url(${Hypenings})` }}>
          <div class="inner">
            <h1>Hypenings</h1>
          </div>
        </div>
        <div className="back">
          <div class="inner">
            <div>
              <a href="#" target="#">
                View Project
              </a>
            </div>
            <div>
              <a href="https://hypenings.herokuapp.com/#!/home" target="#">
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HypeningsCard;
