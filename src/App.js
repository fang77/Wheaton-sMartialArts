import React, { Component } from 'react';
import {Route, NavLink, Switch, Router} from "react-router-dom";
import Home from './pages/home';

import Nav from './components/navbar/navbar';
import Fam from './components/email/join';
import Foot from './components/footer/sponsor';

import About from './pages/about/about';
import Rules from './pages/rules/rules';
import Regi from './pages/register/register';
import Events from './pages/events/events';
import Pricing from './pages/pricing/pricing';
import Class from './pages/classes/classes';

import Pop from './components/popup/signup';

import ScrollRestoration from './ScrollToTop';
import './App.css';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';



export default class App extends Component {

  render(){
    return (
      <div className="App">

            {/*Navigation*/}
            <Nav />
            <Pop />
            <Route render={({location}) => (
              <ScrollRestoration>
              <TransitionGroup>

                <CSSTransition
                  key={location.key}
                  timeout={450}
                  classNames="background"
                >

                  <Switch location={location} >
                    {/*Routes for Different Pages*/}
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Rules" component={Rules} />
                    <Route path="/Register" component={Regi} />
                    <Route path="/Events" component={Events} />
                    <Route path="/Classes" component={Class} />
                    <Route path="/Payment" component={Pricing} />

                  </Switch>

                </CSSTransition>

            </TransitionGroup>
            </ScrollRestoration>
            )} />
            {/*Email and Footer*/}
            <Fam />
            <Foot />
        
      </div>
    );
  }
}
