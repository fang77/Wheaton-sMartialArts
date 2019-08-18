import React, {Component} from 'react';
import './about.css';
import {NavLink} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class About extends Component {
    render() {
        return(
            <section className="about-wrapper">
                <div className="paralax-1"><h1>WHEATON'S MARTIAL ARTS</h1></div>

                <div className="text-wrapper">
                    <Fade top delay={500}>
                    <p className="margin-format"> 
                        <span className='tab'></span>Tae Kwon Do is an ancient martial art that has evolved into one of
                        today's leading forms of discipline and exercise. Tae Kwon Do has also become an excellent
                        tool for helping young people become responsible citizens. I would like to share
                        with you the philosophy of Tae Kwon Do and how it benefits children.

                        <br/>
                        <br/>

                        <span className='tab'></span>Tae Kwon Do is defined in the following way: <b>"Tae</b> means to
                        squash with the foot, or to use your legs for defense; <b>"Kwon</b> means to
                        punch or block with your hands; <b>"Do"</b> means "the way". The first two
                        concepts are easy to understand, kicking and punching. The third, "DO", is
                        the most important and most complex. "DO" is the building block of our
                        teaching and the foundation of our philosophy. Understanding the meaning
                        of "DO" gives students respect for Martial Arts and teaches them the
                        appropriate times to use their skills in class and for self defense.
                        
                        <br/>
                        <br/>

                        <span className='tab'></span>"DO" is the way in which we live our lives. Master Wheaton teaching
                        system puts great emphasis on the attributes of "DO" and teaches students
                        to incorporate "DO" into their lives. A person who lives according to the
                        philosophy of "DO" strives for strength in the following areas:
                        <br/>
                    </p>
                    </Fade>
                    <div className="paralax-2"></div>
                    <Fade top cascade delay={500}>
                    <div className="values-wrapper">
                        <h2>HONOR</h2> <p>A person of good name and reputation.</p>
                        <h2>RESPECT</h2> <p>To have special care for someone or something, to have correct conduct.</p>
                        <h2>DISCIPLINE</h2> <p>Tae Kwon Do training in exercises of self control.</p>
                        <h2>PATIENCE</h2> <p>The showing of self control without complaint in spite of difficulties.</p>
                        <h2>CONCENTRATION</h2> <p>To direct attention on a single object or thought.</p>
                        <h2>EFFORT</h2> <p>To be active in obtaining a higher level of learning both at school and at home.</p>
                        <h2>TRUTH</h2> <p>The real state of things, fact.</p>

                    </div>
                    </Fade>

                    <div className='paralax-3'></div>
                    
                    <Zoom left delay={400}>
                    <p className="emphasis">See more on rules page.</p>

                    <button><NavLink id='NavLinked' to='/Rules'>RULES</NavLink></button>
                    </Zoom>

                    <Zoom right delay={400}>
                    <p className="text-center">
                        We at Wheaton's Martial Arts Academy understand the value of Tae Kwon
                        Do for children and are proud of what we have to offer to our community.
                        We hope you join us in our efforts to provide your children with a positive
                        experience.<br/>
                    </p>          
                    </Zoom>          
                </div>
            </section>
        );
    }
}

export default About;
