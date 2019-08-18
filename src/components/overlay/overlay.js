import React, { Component } from 'react';
import './overlay.css';
import {NavLink} from "react-router-dom";

class overlay extends Component {

    render() {
        
        return(
            <section className="matching-translucent">
                <div className="fill-transparent"></div>
                <div className="action">
                    <p className="bold">LEVEL UP</p>
                    <p className="thin">YOUR</p>
                    <p className="bold">SELF DEFENSE</p>
                    <p className="thin">SKILLS</p>
                </div>

                <div className="button-margin">
                    <button className="payment"><NavLink id='NavLink' to='/Register'>SIGN UP NOW</NavLink></button>
                </div>

                <div className="info">
                    
                    <div className="info-tab">
                        <div className="phone"></div>
                        <p>1-206-742-8401</p>
                    </div>
                    
                    <div className="info-tab">
                        <div className="location"></div>
                        <p>3700 NE 4th St</p>
                        <p>Renton WA 98506</p>
                    </div>

                </div>
            </section>
        );
    }
}

export default overlay;
