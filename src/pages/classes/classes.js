import React, {Component} from 'react';
import './classes.css';

import {NavLink} from "react-router-dom";
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

class Pay extends Component {

    render() {
        return(
            <section className="classes-container">

                    <div className="class-paralax-2">
                        <h1>TAEKWONDO</h1>
                    </div>
                    <Fade top delay={500}>
                    <p>
                        Tae  Kwon  Do (also known as Taekwondo) is the art of self defense that originated in Korea.
                        It is recognized as one of the oldest forms of martial arts in the world, reaching 
                        back over 2,000 years. The name was selected for its appropriate description of the 
                        art: Tae  (foot), Kwon  (hand), Do  (art). Learn the culture and techniques of Taekwondo
                        in group classes with an emphasis on discipline, conditioning, and applications.
                    </p>
                    </Fade>

                    {/* ------------------------------ */}

                    <div className="class-paralax-3">
                        <h1>FIGHT TEAM</h1>
                    </div>

                    <Fade top delay={500}>
                    <p>
                        Join our fight team during the late hours to learn how to apply your 
                        Taekwondo knowledge in practical situations. Test your metal against your
                        classmates, with extra coaching on the side from our instructors during 
                        sparring sessions. Don't miss your chance to apply your knowledge in tournaments
                        year round with the fight team!
                    </p>
                    

                    <div className="sample-pic">
                        <div className="ft-1"></div>
                        <div className="ft-2"></div>
                        <div className="ft-3"></div>
                        <div className="ft-4"></div>
                    </div>
                    </Fade>

                    {/* ------------------------------ */}

                    <div className="class-paralax-4">
                        <h1>LITTLE KICKERS</h1>
                    </div>
                    <Fade top delay={500}>
                    <p>
                        Little Kickers is a program led by instructor Zoë and Master Wheaton for kids
                        in the age range of <b> 4 to 5 years olds only </b>. This program is wonderful
                        if you or your kid wants to get a head start in the art of Taekwondo. Learn basic
                        moves and techniques and build that fundamental basis for self defense.
                    </p>
                    </Fade> 

                    <Fade top delay={700}>
                    <div className='payment-transition'>
                        <p>
                            Find out about the pricing of our classes.
                        </p>
                        <button className="pay-now">
                        <NavLink id='NavsLinked' to='/Payment'>PRICING</NavLink>
                        </button>
                    </div>
                    </Fade>

                    <div className="class-paralax-1">
                        <h1>MUAY THAI & KICK BOXING</h1>
                    </div>
                    
                    {/* ------------------------------ */}

                    <Fade top delay={500}>
                    <p>
                        Learn about the tradition and unique fighting style of Muay Thai or learn the
                        art of modern kick boxing. Your instructor, Master Wheaton, has spent years learning
                        these arts and have applied them in MMA matches and will give you the quality of
                        instruction you deserve.
                    </p>

                    <div className="sample-pic">
                        <div className="mkb-pic1"></div>
                        <div className="mkb-pic2"></div>
                        <div className="mkb-pic3"></div>
                        <div className="mkb-pic4"></div>
                    </div>
                    </Fade>
                    
            </section>
        );
    }
}

export default Pay;