import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class Unauthenticated extends Component {
  render() {
    return (
      <div className="not-found-page" style={{height: "100vh", backgroundColor: "#EF1B36", color: "white"}}>
        <div className='not-found-page-content' style={{position: "fixed", top: "25%", left: "25%"}}>
          <h1 style={{color: 'white', fontSize: "5rem"}}>Unauthorized :(</h1>
          <p style={{fontSize: '1.5rem', color: '#1E1E1E', width: "70%"}}>Looks like you don't have permission to access this page.  If you believe this is an error, please contact us to get this resolved.</p>
          <Link to='/'><Button>Home</Button></Link>
        </div>
      </div>
    );
  }
}

export default Unauthenticated;