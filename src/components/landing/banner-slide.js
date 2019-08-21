import React, { Component } from 'react';
import Overlay from '../overlay/overlay';

import './banner-slide.css';

class slide extends Component {
    render() {
        return(
            <div className="front-gallery">
                <Overlay />

            </div>
        );
    }
}

export default slide;
