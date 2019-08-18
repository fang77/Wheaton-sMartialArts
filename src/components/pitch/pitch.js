import React, { Component } from 'react';
import './pitch.css';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

class pitch extends Component {

    render() {
        return(
            <section className='pitch-container'>
                <Fade delay={500}>
                <div className='title'>
                    <div className="line"></div>
                    <h1> WHY US </h1>
                    <div className="line"></div>
                </div>
                </Fade>
                               
                <div className="icon-section">
                    <Fade delay={800}>
                    <div className='icon-panel'>
                        <div className="community-logo"></div>
                        <h2>COMMUNITY DRIVEN</h2>
                        <p>Join our diverse and accepting community. Work hard play hard!</p>
                    </div>
                    </Fade>

                    <Fade delay={1000}>
                    <div className='icon-panel'>
                        <div className="value-logo"></div>
                        <h2>GREAT VALUE</h2>
                        <p>All of our programs have amazing prices, along with a great new student package.</p>
                    </div>
                    </Fade>

                    <Fade delay={1200}>
                    <div className='icon-panel'>
                        <div className="quality-logo"></div>
                        <h2>QUALITY INSTRUCTION</h2>
                        <p>Quality over quantity. We teach values and discipline that carry on for a lifetime.</p>
                    </div>
                    </Fade>
                </div>
                
            </section>
        );
    }
}

export default pitch;
