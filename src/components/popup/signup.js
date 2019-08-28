import React, {Component} from 'react';
import './signup.css';
import axios from 'axios';

export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state={
            isPopupOpen: false,
            openOnce: 0,
            email: '',
        }

        this.startTimer();
    }

    startTimer() {
        
        if(this.state.openOnce === 0) {
            setTimeout(()=> {
                this.setState({
                    isPopupOpen: true
                })
            }, 2000)
            this.setState({
                openOnce: 1
            })
        }
    }

    send(email) {
        if(email !== '') {

            axios({ method: 'POST',
            mode: 'no-cors',
            url: 'https://us3.api.mailchimp.com/3.0/lists/4d4eb89697/members',
            crossdomain: true,
            add_headers: 
            { 'cache-control': 'no-cache',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Origin': 'https://wheatonsmartialarts.com',
            'X-Requested-With': 'XMLHttpRequest',
              Connection: 'keep-alive',
              'Content-Length': '69',
              'Accept-Encoding': 'gzip, deflate',
              Cookie: '_mcid=1.e1bf4e5382802f8e4d5c8d275be90528; _AVESTA_ENVIRONMENT=prod',
              Host: 'https://us3.api.mailchimp.com',
              'Postman-Token': '8b1761fc-624f-4747-8aa7-2c400dc399cd,8828c4e7-0365-45b1-b735-1352031c3759',
              'Cache-Control': 'no-cache',
              Accept: '*/*',
              Origin: 'https://www.wheatonsmartialarts.com',
              'User-Agent': 'PostmanRuntime/7.15.2',
              Authorization: 'Basic d21hOTk6Yzk0ZTY3MTMxYWZiMzQ0ZjBmMGM0NTg3ODU0OTdmYWEtdXMz',
              'Content-Type': 'application/json' },
    
            body: { email_address: {email}, status: 'subscribed' },
            json: true 
            }).then(function response() {
                console.log("success");
            }).catch(function(error){
                console.log("bad");
            });
        }
    }

    bindV(event) {
        this.setState({email: event.target.value});
    }

    render(){

        return(
            <div className={this.state.isPopupOpen ? "popup-container" : "popup-closed"}>
                    
                    <div className='yes'>

                        <div className="x"> 
                            <i class="fa fa-times" aria-hidden="true" onClick={ () => this.setState({isPopupOpen: false})}></i>
                        </div>
                        <h1>JOIN THE WMA FAMILY TODAY</h1>
                        <p>LIMITED $65 SPECIAL INCLUDES FREE UNIFORM</p>

                        <input placeholder="    Email Address" type="text" value={this.state.email} onChange={this.bindV.bind(this)} />
                        <button type="submit" className="subscribe" onClick={() => this.send(this.state.email)}>SUBSCRIBE</button>

                    </div>
            </div>
        );
    }
}