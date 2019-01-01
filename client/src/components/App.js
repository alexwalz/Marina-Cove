import React, { Component } from 'react';
import '../css/App.css';
import HomePage from './homepage/HomePage.js'
import NotFound from './global/NotFound'
import Login from './login/View'
import Signup from './signup/View'
import { Route, withRouter, Switch } from "react-router-dom";
import Profile from './profile/View'
import ConfirmPage from './Confirm'
import ForgotPasswordEmail from './global/forgotPassword/ForgotPasswordEmail'
import ResetPassword from './global/forgotPassword/ResetPassword'
import ExpiredLink from './global/forgotPassword/ExpiredLink'
import unauthenticated from './global/unauthenticated'
import AboutUs from './homepage/components/AboutUs'
import BoatStorage from './homepage/components/services/BoatStorage'
import SelfStorage from './homepage/components/services/SelfStorage'
import RVStorage from './homepage/components/services/RvStorage'




class App extends Component {
  render() {
    return (
          <div>
            <Switch>
              <Route onUpdate={() => window.scrollTo(0, 0)} path="/" exact component={HomePage} />
              <Route onUpdate={() => window.scrollTo(0, 0)} path="/login" exact component={Login} />
              <Route onUpdate={() => window.scrollTo(0, 0)} path="/about" exact component={AboutUs} />
              <Route onUpdate={() => window.scrollTo(0, 0)} path="/boat-storage" exact component={BoatStorage} />
              <Route onUpdate={() => window.scrollTo(0, 0)} path="/rv-storage" exact component={RVStorage} />
              <Route onUpdate={() => window.scrollTo(0, 0)} path="/self-storage" exact component={SelfStorage} />
              <Route onUpdate={() => window.scrollTo(0, 0)} path="/signup" exact component={Signup} />
              <Route onUpdate={() => window.scrollTo(0, 0)} path="/forgot-password" exact component={ForgotPasswordEmail} />
              <Route onUpdate={() => window.scrollTo(0, 0)} path="/password-reset/:id" component={ResetPassword} />
              <Route onUpdate={() => window.scrollTo(0, 0)} path="/profile" component={Profile} />
              <Route onUpdate={() => window.scrollTo(0, 0)} path="/expired-link" component={ExpiredLink} />
              <Route onUpdate={() => window.scrollTo(0, 0)} path='/confirm/:id' component={ConfirmPage} />
              <Route onUpdate={() => window.scrollTo(0, 0)} path='/404' component={NotFound} />
              <Route onUpdate={() => window.scrollTo(0, 0)} path='/401' component={unauthenticated}/>
              <Route onUpdate={() => window.scrollTo(0, 0)} component={NotFound} />
            </Switch>
          </div>
    );
  }
}

export default withRouter(App);