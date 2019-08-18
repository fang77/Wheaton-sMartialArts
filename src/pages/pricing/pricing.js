import React, { Component } from 'react';
import './pricing.css';
import {NavLink} from "react-router-dom";

import Fade from 'react-reveal/Fade';

class Price extends Component {

    render() {

        return(
            <section className="option-panel">
                <Fade delay={500}>
                <h1>PACKAGES</h1>
                </Fade>
                
                <Fade delay={500}>
                <p className="top-word">Choose from a package below and indicate the length of membership.
                Or you can <NavLink id='NavLinked' to='/Register'>click here</NavLink> to get started.
                </p>
                </Fade>

                <div className='package-section'>
                    <Fade delay={500}>
                    <div className="separator"></div>
                    </Fade>
                    
                    <div className="package-sort">
                        <Fade delay={800}>
                        <div className="package-panel">
                            
                            <h2 className="basic">BRONZE</h2>

                            <ul>
                                <li>3 Classes Per Week</li>
                                <li>Professional TKD Instructions</li>
                                <li>Basic Uniform</li>
                            </ul>

                        </div> 
                        </Fade>
                        
                        
                        <Fade delay={1200}>
                        <div className="package-panel">
                            
                            <h2 className="premier">GOLD</h2>
                            
                            <ul>
                                <li>3 Class Per Week</li>
                                <li>Taekwondo</li>
                                <li>Sparring Sessions</li>
                                <li>Competition Prep</li>
                                <li>KickBoxing and Muay Thai</li>
                                <li>Sparring Sessions</li>
                            </ul>

                        </div>
                        </Fade>

                        <Fade delay={1600}>
                        <div className="package-panel">

                            <h2 className="standard">SILVER</h2>

                            <ul>
                                <li>3 Classes Per Week</li>
                                <li>Professional TKD Instructions</li>
                                <li>Basic Uniform</li>
                            </ul>

                        </div>
                        </Fade>

                    </div>
                    
                </div>
                <Fade delay={500}>
                <div className="promo">
                        <div className="back"></div>

                        <h2 className="trial">SPECIAL OFFER</h2>
                    
                        <p>$65 One Month Trial. Free Uniform and Bronze Package Benefits.</p>
                </div>
                </Fade>
                <Fade delay={500}>
                <div className="separator"></div>
                </Fade>
                <div className="change-panel">
                    <Fade delay={800}>
                    <div className="package-panel">
                        
                        <h2 className="basic">MONTHLY</h2>

                        <ul>
                            <li>1st Member</li>
                            <li><h3>$165</h3></li>
                            <li>2nd Member</li>
                            <li><h3>$125</h3></li>
                            <li>3rd Member</li>
                            <li><h3>$95</h3></li>
                            <li>4th Member</li>
                            <li><h3>FREE</h3></li>
                        </ul>
                    </div>
                    </Fade>
                    
                    <Fade delay={1000}>
                    <div className="package-panel">
                        
                        <h2 className="premier">YEARLY</h2>

                        <ul>
                            <li>1st Member</li>
                            <li><h3>$124</h3></li>
                            <li>2nd Member</li>
                            <li><h3>$125</h3></li>
                            <li>3rd Member</li>
                            <li><h3>$95</h3></li>
                            <li>4th Member</li>
                            <li><h3>FREE</h3></li>
                            <li><b>$250 DEPOSIT</b></li>
                        </ul>
                    </div>
                    </Fade>

                    <Fade delay={1200}>
                    <div className="package-panel">
                        
                        <h2 className="standard">6 MONTH SILVER</h2>

                        <ul>
                            <li>1st Member</li>
                            <li><h3>$145</h3></li>
                            <li>2nd Member</li>
                            <li><h3>$115</h3></li>
                            <li>3rd Member</li>
                            <li><h3>$85</h3></li>
                            <li>4th Member</li>
                            <li><h3>FREE</h3></li>
                        </ul>
                    </div>
                    </Fade>

                    <Fade delay={800}>
                    <div className="package-panel">
                        
                        <h2 className="standard">1 YEAR SILVER</h2>

                        <ul>
                        <li>1st Member</li>
                            <li><h3>$135</h3></li>
                            <li>2nd Member</li>
                            <li><h3>$95</h3></li>
                            <li>3rd Member</li>
                            <li><h3>$65</h3></li>
                            <li>4th Member</li>
                            <li><h3>FREE</h3></li>
                        </ul>
                    </div>
                    </Fade>

                    <Fade delay={1000}>
                    <div className="package-panel">
                        
                        <h2 className="little-kid">LITTLE KICKERS</h2>

                        <ul>
                            <li>4/5 Years Olds Monthly</li>
                            <li><h3>$75</h3></li>
                            <li>Uniform</li>
                            <li><h3>FREE</h3></li>
                            <li><b>_</b></li>
                            <li><h3></h3></li>
                            <li><b>_</b></li>
                            <li><h3></h3></li>
                            <li><b>_</b></li>
                            <li><h3></h3></li>
                        </ul>
                    </div>
                    </Fade>

                    <Fade delay={1200}>
                    <div className="package-panel">
                        
                        <h2 className="premier">PRIVATE LESSONS</h2>

                        <ul>
                            <li>Hourly Rate</li>
                            <li><h3>$65</h3></li>
                            <li><b>_</b></li>
                            <li><h3></h3></li>
                            <li><b>_</b></li>
                            <li><h3></h3></li>
                            <li><b>_</b></li>
                            <li><h3></h3></li>
                            <li><b>_</b></li>
                            <li><h3></h3></li>
                            <li><b>_</b></li>
                            <li><h3></h3></li>
                        </ul>
                    </div>
                    </Fade>
                </div>
                <Fade delay={800}>
                <p className="bot-offer"> <b>15%</b> Family Discount on <b>ALL</b> Yearly Contracts.</p>
                </Fade>
                <Fade delay={800}>
                <button><NavLink id='NavLinked' to='/Register'>SIGN UP</NavLink></button>
                </Fade>

                <Fade down delay={800}>
                <div className="payment-container">
                    <h1>PAYMENTS</h1>

                    <p>We at Wheaton's Martial Arts accept payments through email links
                        with Quick Books. A link will be provided below and you will recieve an
                        email 3-5 business days after sign up. 
                    </p>
                    <p>A link will be provided below on more information for payments online</p>
                    <a href='https://quickbooks.intuit.com/' target="_blank" rel="noopener noreferrer" className="qb-logo"></a>
                    
                    <p>Otherwise, we accept paypal and cash as a form of month to month payment.</p>

                    <div className="logo-holder">
                        <a className='ppl-logo'></a>
                        <a className='visa-logo'></a>
                        <a className='cash-logo'></a>
                    </div>
                </div>
                </Fade>
            </section>
        );

    }
}

export default Price;