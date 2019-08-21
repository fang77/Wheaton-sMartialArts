import React, { Component } from 'react';
import './trailer.css';
import sample from './dummy.mp4';
import sampleweb from './dummy.webm';

class trailer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOverlay: true
        }
    }

    render(){

        const isOverlay = this.state.isOverlay;
        return(
            <section className="trailer-wrapper">
                <div className={this.state.isOverlay ? "overlay-video" : "overlay-closed"}>
                    <h2>FIGHT TEAM</h2>
                    <button onClick={() => this.setState({isOverlay: false})}>PLAY</button>
                </div>
                <video className="trailer" controls loop muted>
                    <source className="video-display" src={sample} type="video/mp4" />
                    <source className="video-mobile" src={sampleweb} type="video/webm" />
                </video>
            </section>
        );
    }

}

export default trailer;