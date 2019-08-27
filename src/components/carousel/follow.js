import React, { Component } from 'react';
import Element from './element.js';
import Square from './square';

import './follow.css';

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state= {
            data: Element.properties,
            current: Element.properties[0]
        }
    }

    /* Next and Back Button Actions*/ 
    nextButton = () => {
        const next = this.state.current.index + 1;

        if(next < this.state.data.length) {
            this.setState({
                current: this.state.data[next]
            })
        }
    }

    backButton = () => {
        const next = this.state.current.index - 1;
        if(next >= 0) {
            this.setState({
                current: this.state.data[next]
            })
        }
    }

    /* Official Render */
    render(){
        const {data, current} = this.state;
        return(
            <section className="social-container">
                <div className="follow">
                    <h2>@WMAACADEMY9</h2>
                    <h1>FOLLOW MMA</h1>
                </div>

                <div className='carousel-container'>
                <div className="overlay-button">
                    <div className="previous" onClick={this.backButton}>
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    </div>
                    <div className="filler-button"></div>
                    <div className="next" onClick={this.nextButton}>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                </div>
                    <div className='carousel' style={{'transform': `translateX(-${current.index*(100/data.length)}%)`}}>
                    {data.map(current => <Square property={current} />)
                    }
                    </div>
                </div>


                <div className="follow">
                    <button><a href='https://www.instagram.com/wmaacademy9/' target="_blank" rel="noopener noreferrer">FOLLOW US ON INSTAGRAM</a></button>
                    <h2>@WMAACADEMY9</h2>
                    <h1>SOCIAL MEDIA</h1>
                </div>

            </section>
        );
    }
}

export default Carousel;