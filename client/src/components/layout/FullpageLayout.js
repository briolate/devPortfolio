import '../../libs/normalize.css';

import React, { Component } from 'react';

import { Fullpage, HorizontalSlider, Slide } from 'fullpage-react';

import Landing from '../landing/Landing';

import Up from '../../img/up-chevron.png';
import Down from '../../img/down-chevron.png';
import Left from '../../img/left-chevron.png';
import Right from '../../img/right-chevron.png';

const { changeFullpageSlide, changeHorizontalSlide } = Fullpage;

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 0 is default
  scrollSensitivity: 2,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 0 is default
  touchSensitivity: 2,
  scrollSpeed: 500,
  resetSlides: true,
  hideScrollBars: true,
  enableArrowKeys: true,

  // optional, set the initial vertical slide
  activeSlide: 0
};

const topNavStyle = {
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  cursor: 'pointer',
  zIndex: 10,
  top: '0px'
};

const bottomNavStyle = {
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  zIndex: 10,
  bottom: '0px'
};

const horizontalNavStyle = {
  position: 'absolute',
  width: '100%',
  top: '50%',
  cursor: 'pointer',
  zIndex: 10
};

const horizontalSliderProps = {
  name: 'horizontalSlider1',
  infinite: true
};

class FullpageLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fullpage: 0,
      active: {
        Fullpage: 0,
        horizontalSlider1: 0
      }
    };

    this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
    this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
  }

  onSlideChangeStart(name, props, state, newState) {
    if (!this.horizontalNav) {
      this.horizontalNav = document.getElementById('horizontal-nav');
    }

    if (name === 'horizontalSlider1') {
      scrollNavStart(this.horizontalNav);
    }
  }

  onSlideChangeEnd(name, props, state, newState) {
    if (name === 'horizontalSlider1') {
      scrollNavEnd(this.horizontalNav);
    }

    const oldActive = this.state.active;
    const sliderState = {
      [name]: newState.activeSlide
    };

    const updatedState = Object.assign(oldActive, sliderState);
    this.setState(updatedState);
  }

  componentDidMount() {}

  render() {
    const { active } = this.state;

    const currentActive = active.Fullpage;
    const prevSlide = changeFullpageSlide.bind(null, currentActive - 1);
    const nextSlide = changeFullpageSlide.bind(null, currentActive + 1);
    const goToTop = changeFullpageSlide.bind(null, 0);

    const horizontalSliderName = horizontalSliderProps.name;
    const horizontalActive = this.state.active[horizontalSliderName];

    const prevHorizontalSlide = changeHorizontalSlide.bind(
      null,
      horizontalSliderName,
      horizontalActive - 1
    );
    const nextHorizontalSlide = changeHorizontalSlide.bind(
      null,
      horizontalSliderName,
      horizontalActive + 1
    );

    let topNav;

    if (this.state.Fullpage === 0) {
      topNav = (
        <div style={topNavStyle}>
          <Landing />
        </div>
      );
    } else {
      topNav = (
        <div style={topNavStyle}>
          <span onClick={prevSlide}>
            <img src={Up} alt="Up arrow" />
          </span>
        </div>
      );
    }

    const bottomNav = (
      <span onClick={nextSlide} style={bottomNavStyle}>
        <img src={Down} alt="Down arrow" />
      </span>
    );

    const horizontalNav = (
      <div id="horizontal-nav" style={horizontalNavStyle}>
        <span onClick={prevHorizontalSlide}>
          <img src={Left} alt="Left arrow" />
        </span>
        <span
          style={{ position: 'absolute', right: '0px' }}
          onClick={nextHorizontalSlide}
        >
          <img src={Right} alt="Right arrow" />
        </span>
      </div>
    );

    const horizontalSlides = [
      <Slide style={{ backgroundColor: 'red' }}>
        <p>Horizontal 1</p>
      </Slide>,
      <Slide style={{ backgroundColor: 'yellow' }}>
        <p>Horizontal 2</p>
      </Slide>,
      <Slide style={{ backgroundColor: 'green' }}>
        <p>Horizontal 3</p>
      </Slide>
    ];
    horizontalSliderProps.slides = horizontalSlides;

    const horizontalSlider = (
      <HorizontalSlider id="horizontal-slider-1" {...horizontalSliderProps}>
        {horizontalNav}
      </HorizontalSlider>
    );

    const verticalSlides = [
      <Slide style={{ backgroundColor: 'blue' }}>
        <p>Slide 1</p>
      </Slide>,
      horizontalSlider,
      <Slide style={{ backgroundColor: 'pink' }}>
        <p>Slide 3</p>
      </Slide>
    ];
    fullPageOptions.slides = verticalSlides;

    return (
      <Fullpage
        onSlideChangeStart={this.onSlideChangeStart}
        onSlideChangeEnd={this.onSlideChangeEnd}
        {...fullPageOptions}
      >
        {topNav}
        {bottomNav}
      </Fullpage>
    );
  }
}

function scrollNavStart(nav) {
  // make the nav fixed when we start scrolling horizontally
  nav.style.position = 'fixed';
}

function scrollNavEnd(nav) {
  // make the nav absolute when scroll finishes
  nav.style.position = 'absolute';
}

export default FullpageLayout;
