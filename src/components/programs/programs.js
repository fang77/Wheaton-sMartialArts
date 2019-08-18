import React, { Component } from 'react';
import './programs.css';
import {NavLink} from "react-router-dom";

import Fade from 'react-reveal/Fade';

class squares extends Component {

    render() {
        return(
            <section className='programs'>
                <h2 className="title-program">PROGRAMS</h2>
                <div className='programs-container'>
                <Fade delay={800}>
                <div className='program-panel'>
                    <div className="muay">
                        <div className="overlay-invisible">
                            <p>
                            Muay Thai or Thai Boxing is the national sport
                            and cultural martial art of Thailand. 
                            It was developed several hundreds of years ago
                            as a form of close-combat that utilizes the
                            entire body as a weapon.
                            </p>
                        </div>
                    </div>
                    <h2>MUAY THAI</h2>
                </div>
                </Fade>
                <Fade delay={1000}>
                <div className='program-panel'>
                    <div className="overlay-invisible">
                        <p>
                        Kickboxing is a group of stand-up combat sports based 
                        on kicking and punching, historically developed from 
                        karate mixed with boxing. Kickboxing is practiced for
                         self-defence, general fitness, or as a contact sport.
                        </p>
                    </div>
                    <div className="kick"></div>
                    <h2>KICK BOXING</h2>
                </div>
                </Fade>

                <Fade delay={1200}>
                <div className='program-panel'>
                    <div className="overlay-invisible">
                        <p>
                        Tae Kwon Do (also known as Taekwondo) is the art of self
                         defense that originated in Korea. It is recognized as one
                          of the oldest forms of martial arts in the world, 
                          reaching back over 2,000 years. The name was selected 
                          for its appropriate description of the art: Tae (foot),
                          Kwon (hand), Do (art).
                        </p>
                    </div>
                    <div className="tae"></div>
                    <h2>TAEKWONDO</h2>
                </div>
                </Fade>
                
                <Fade delay={1400}>
                <div className='program-panel'>
                    <div className="overlay-invisible">
                        <p>
                        Little Kickers is a Tae Kwon Do program for little kids.
                        Start them early and test out the waters of martial arts.
                        Your kid(s) will learn discipline while having fun interacting
                        with kids their age! These are skills they can carry on for
                        a life time.
                        </p>
                    </div>
                    <div className="little"></div>
                    <h2>LITTLE KICKERS</h2>
                </div>
                </Fade>
                </div>
                <Fade delay={1700}>
                <button className="info-button"><NavLink id='NavLink' to='/Classes'>MORE INFORMATION</NavLink></button>
                </Fade>
            </section>
        );
    }
}

export default squares;
