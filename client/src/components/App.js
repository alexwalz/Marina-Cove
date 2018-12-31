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
              <Route path="/" exact component={HomePage} />
              <Route path="/login" exact component={Login} />
              <Route path="/about" exact component={AboutUs} />
              <Route path="/boat-storage" exact component={BoatStorage} />
              <Route path="/rv-storage" exact component={RVStorage} />
              <Route path="/self-storage" exact component={SelfStorage} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/forgot-password" exact component={ForgotPasswordEmail} />
              <Route path="/password-reset/:id" component={ResetPassword} />
              <Route path="/profile" component={Profile} />
              <Route path="/expired-link" component={ExpiredLink} />
              <Route path='/confirm/:id' component={ConfirmPage} />
              <Route path='/404' component={NotFound} />
              <Route path='/401' component={unauthenticated}/>
              <Route component={NotFound} />
            </Switch>
          </div>
    );
  }
}

export default withRouter(App);