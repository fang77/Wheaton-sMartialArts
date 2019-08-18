import React, { Component } from 'react';
import axios from 'axios';
import './join.css';
import Tada from 'react-reveal/Tada';

class Join extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'filler',
        }
        this.handleChange = this.handleChange.bind(this);
        this.addEmail= this.addEmail.bind(this);
    }

    handleChange(event) {
        this.setState({email: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.email);
        event.preventDefault();
    }
    
    addEmail = async e => {
        const email = this.state.email;
        /*reactjs fetch version*/
        axios({ method: 'POST',
        crossorigin: true,
        host: "proxy",
        port: 5000,
        url: 'https://us3.api.mailchimp.com/3.0/lists/4d4eb89697/members',
        add_headers: 
        { 'cache-control': 'no-cache',
          Connection: 'keep-alive',
          'Content-Length': '69',
          'Accept-Encoding': 'gzip, deflate',
          Cookie: '_mcid=1.e1bf4e5382802f8e4d5c8d275be90528; _AVESTA_ENVIRONMENT=prod',
          Host: 'https://us3.api.mailchimp.com',
          'Postman-Token': '8b1761fc-624f-4747-8aa7-2c400dc399cd,8828c4e7-0365-45b1-b735-1352031c3759',
          'Cache-Control': 'no-cache',
          Accept: '*/*',
          'User-Agent': 'PostmanRuntime/7.15.2',
          Authorization: 'Basic d21hOTk6Yzk0ZTY3MTMxYWZiMzQ0ZjBmMGM0NTg3ODU0OTdmYWEtdXMz',
          'Content-Type': 'application/json' },
        body: JSON.stringify({ email_address: {email}, status: 'subscribed' }),
        json: true 
        }).then(function response() {
            console.log("success");
        }).catch(function(error){
            console.log("error");
        });
    }

    render() {
        return(
            <section className="join-the-fam-container">
                <Tada delay={300}>
                <div className="join-overlay">
                    <h1> JOIN THE WMA FAMILY </h1>
                    <p> Stay updated with everything </p>
                    <div className="send">
                        <input placeholder="    Email Address" onChange={this.handleChange} value={this.state.value} />
                        <button type="submit" className="subscribe" onClick={this.addEmail}>SUBSCRIBE</button>
                    </div>
                </div>
                </Tada>
            </section>
        );
    }
}

export default Join;