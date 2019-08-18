import React, { Component } from 'react';


import Top from '../components/landing/banner-slide';
import Pitch from '../components/pitch/pitch';
import Program from '../components/programs/programs';
import Video from '../components/trailer/trailer';
import Social from '../components/carousel/follow';
import Diag from '../components/diagonal/diagonal';

import '../ScrollToTop';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

import './home.css';


export default class Home extends Component {
    constructor(props) {
      super(props);
    }
  
    // Render All Components
    render() {

      
      // All imported components
      return (
          <div className="super">
            <Top />
            <Pitch />
            <Zoom delay={500}>
              <Program />
            </Zoom>

            <Slide right delay={900}>
              <Video />
            </Slide>

            <Slide left delay={900}>
              <Social />
            </Slide>

            <Zoom delay={900}>
              <Diag />
            </Zoom>
          </div>
      );
    }
  }