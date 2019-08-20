import React, { Component } from 'react';

import './sponsor.css';

class Foot extends Component {

    render() {
        return(
            <footer className="footer-container">
                <div className=" left">
                    <div className="bottom-panel">
                        <h2>CONTACT</h2>
                        <p>1-206-742-8401</p>
                        <p>3700 NE 4TH ST RENTON WA 98506</p>
                    </div>

                    <div className="bottom-panel">
                        <h2>HOURS</h2>
                        <p>M W F        4PM - 9PM</p>
                        <p>WEEKENDS    9AM - 12PM</p>
                    </div>

                    <div className="bottom-panel">
                        <h2>RESOURCES</h2>
                        <a href='https://aausports.org/' target="_blank" rel="noopener noreferrer">Amateur Athletic Union</a>
                        <a href='http://www.kukkiwon.or.kr/front/eng/main2.action' target="_blank" rel="noopener noreferrer">Kukkiwon</a>
                    </div>

                </div>

                <div className="middle">
                    <div className="bottom-stretched">
                        <h2>JOIN THE COMMUNITY</h2>
                        <p>Subscribe to us for new updates and more.</p>
                        <input placeholder="    Email Address"></input>
                        <button>JOIN NOW</button>
                    </div>

                    <div className="bottom-panel">
                        <h2>SOCIAL MEDIA</h2>
                        <a href='https://www.facebook.com/wheatonsmartialartsacademy/'  target="_blank" rel="noopener noreferrer">
                           Facebook 
                        </a>
                        <a href='https://www.instagram.com/tkd206/' target="_blank" rel="noopener noreferrer">
                           Instagram 
                        </a>
                        <a href='https://www.yelp.com/biz/wheatons-martial-arts-academy-renton?osq=wheatons+martial+arts+academy' target="_blank" rel="noopener noreferrer">Yelp</a>
                    </div>
                </div>

                <div className="right">
                    <div className="logo-1">

                    </div>

                    <div className="logo-2">

                    </div>

                    <div className="logo-3">

                    </div>
                </div>
            </footer>
        );
    }
}

export default Foot;