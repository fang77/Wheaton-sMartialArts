import React, { Component } from 'react';

import './join.css';
import Tada from 'react-reveal/Tada';

class Join extends Component {

    render() {
        return(
            <section className="join-the-fam-container">
                <Tada delay={300}>
                <div className="join-overlay">
                    <h1> JOIN THE WMA FAMILY </h1>
                    <p> Stay updated with everything </p>
                    <div className="send">
                        <input placeholder="    Email Address" />
                        <button type="submit" className="subscribe">SUBSCRIBE</button>
                    </div>
                </div>
                </Tada>
            </section>
        );
    }
}

export default Join;