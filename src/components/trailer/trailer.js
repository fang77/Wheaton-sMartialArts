import React, { Component } from 'react';
import './trailer.css';
import sample from './dummy.mp4';

class trailer extends Component{

    render(){
        return(
            <section className="trailer-wrapper">
                <div className="overlay-video">
                    <h2>FIGHT TEAM</h2>
                </div>
                <video className="trailer" autoPlay loop muted>
                    <source src={sample} type="video/mp4" />
                </video>
            </section>
        );
    }

}

export default trailer;