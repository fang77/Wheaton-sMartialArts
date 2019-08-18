import React, {Component} from 'react';
import './signup.css';

export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state={
            isPopupOpen: false,
            openOnce: 0,
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

    render(){

        return(
            <div className={this.state.isPopupOpen ? "popup-container" : "popup-closed"}>

                    <div className="x"> 
                    <i class="fa fa-times" aria-hidden="true" onClick={ () => this.setState({isPopupOpen: false})}></i>
                    </div>
                    
                    <h1>JOIN THE WMA FAMILY TODAY</h1>
                    <p>LIMITED $65 SPECIAL : INCLUDES FREE UNIFORM</p>
                    <input placeholder="    Email Address" />
                    <button type="submit" className="subscribe">SUBSCRIBE</button>

            </div>
        );
    }
}