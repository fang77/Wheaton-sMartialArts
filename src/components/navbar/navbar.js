import React, { Component } from 'react';
import './navbar.css';
import {NavLink} from "react-router-dom";

class Nav extends Component {

    constructor(){
        super();
        this.state = {
            scrolled: false,
            side: false,
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 50;
            if(isTop !== true) {
                this.setState({scrolled: true});
            } else {
                this.setState({scrolled: false});
            }
        });

    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    render(){
        return(
            <header className={this.state.scrolled ? 'translucent-scrolled' : 'translucent'}>

                <div className="hamburger">
                    <i class="fa fa-bars" aria-hidden="true" onClick={ () => this.setState({side: !this.side})}></i>
                </div>
                
                <div className={ this.state.side ? "menu-active" : "menu"}>
                    
                    {/*Exit*/}
                    <i class="fa fa-times" aria-hidden="true" onClick={ () => this.setState({side: false})}></i>
                    
                    <NavLink id='NavLink' to='/About' onClick={ () => this.setState({side: false})}>ABOUT</NavLink>
                    <div className="menu-line"></div>

                    <NavLink id='NavLink' to='/Classes' onClick={ () => this.setState({side: false})}>CLASSES</NavLink>
                    <div className="menu-line"></div>
                    
                    <NavLink id='NavLink' to='/Payment' onClick={ () => this.setState({side: false})}>PAYMENT</NavLink>
                    <div className="menu-line"></div>
                    
                    <NavLink id='NavLink' to='/Rules' onClick={ () => this.setState({side: false})}>RULES</NavLink>
                    <div className="menu-line"></div>

                    <NavLink id='NavLink' to='/Register' onClick={ () => this.setState({side: false})}>REGISTRATION</NavLink>
                    <div className="menu-line"></div>

                    <NavLink id='NavLink' to='/Events' onClick={ () => this.setState({side: false})}>EVENTS</NavLink>
                    <div className="menu-line"></div>

                </div>

                <ul>
                    <li><NavLink id='NavLink' to='/About'>ABOUT</NavLink></li>
                    <li><NavLink id='NavLink' to='/Classes'>CLASSES</NavLink></li>
                    <li><NavLink id='NavLink' to='/Rules'>RULES</NavLink></li>
                </ul>
                <NavLink exact to='./' id='NavLink' className='logo-container'></NavLink>
                <ul>
                    <li><NavLink id='NavLink' to='/Payment'>PAYMENT</NavLink></li>
                    <li><NavLink id='NavLink' to='/Register'>REGISTRATION</NavLink></li>
                    <li><NavLink id='NavLink' to='/Events'>EVENTS</NavLink></li>
                </ul>

                <div className="filler-other"></div>
            </header>
        );
    }

}

export default Nav;
