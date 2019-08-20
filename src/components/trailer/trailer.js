import React, { Component } from 'react';
import './trailer.css';
import sample from './dummy.mp4';
import sampleweb from './dummy.webm';

class trailer extends Component{

    render(){
        return(
            <section className="trailer-wrapper">
                <div className="overlay-video">
                    <h2>FIGHT TEAM</h2>
                </div>
                <video className="trailer" playsinline autoPlay loop muted>
                    <source src={sample} type="video/mp4" />
                    <source src={sampleweb} type="video/webm" />
                </video>
            </section>
        );
    }

}

export default trailer;