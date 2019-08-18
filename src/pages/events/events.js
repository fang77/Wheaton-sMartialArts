import React, {Component} from 'react';
import './events.css';

class Events extends Component{
    render(){
        return(
            <section className="events-container">
                <h1>EVENTS CALENDER</h1>
                <iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=d2hlYXRvbnNtYXJ0aWFsYXJ0c0BnbWFpbC5jb20&amp;src=dmp0ZjBkbTNpdTFqNDdsY2Y3cjNtNTVwcmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23E4C441&amp;color=%23616161&amp;color=%230B8043&amp;mode=WEEK" width="800" height="600" frameborder="0" ></iframe>
            </section>
        );
    }
}

export default Events;

