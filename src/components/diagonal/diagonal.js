import React, { Component } from  'react';
import ReactDom from 'react-dom';

import './diagonal.css';

class Diag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active : false
        }

    }

    render() {
        return(
            <div className="diag-container">
                <div className="diag">
                <div className={ this.state.active ?  "change-active" : "change"}
                onClick={ () => this.setState({active: !this.state.active})}>
                </div>
                <ul className={ this.state.active? "ul active" : "ul"}>
                    <li>
                        <a href='https://www.facebook.com/wheatonsmartialartsacademy/'  target="_blank" rel="noopener noreferrer">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                    </li>

                    <li>
                        <a href='https://www.instagram.com/tkd206/' target="_blank" rel="noopener noreferrer">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </li>



                    <li>
                        <a href='#'>
                            <i class="fa fa-youtube-play" aria-hidden="true"></i>
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </li>

                    <li>
                        <a href='https://www.yelp.com/biz/wheatons-martial-arts-academy-renton?osq=wheatons+martial+arts+academy' target="_blank" rel="noopener noreferrer">
                            <i class="fa fa-yelp" aria-hidden="true"></i>
                        </a>
                    </li>


                    <li>
                        <a href='#'>
                            <i class="fa fa-snapchat-ghost" aria-hidden="true"></i>
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        );
    }
}

export default Diag;