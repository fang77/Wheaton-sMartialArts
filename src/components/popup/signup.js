import React, {Component} from 'react';
import './signup.css';

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

            fetch('https://us3.api.mailchimp.com/3.0/lists/4d4eb89697/members',{ 
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Accept': '*application/json',
                    'Content-Type': 'application/json' 
                },
            
                body: JSON.stringify({ email_address: {email}, status: 'subscribed' 
                }),
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