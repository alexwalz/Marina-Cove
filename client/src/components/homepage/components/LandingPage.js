import React, { Component } from 'react';
import '../styles.css'
import {Button, Image, Icon} from 'semantic-ui-react'
import banner from '../../../images/Home_Banner_1-1.jpg'
import bannerLogo from '../../../images/Marina_Cove_Nexus_Logo.png'


class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
}


  render() {
    return (
      <div className="landing-page">
            <div className='landing-page-text'>
            <div style={{textAlign: 'center', marginLeft: 'auto', marginRight: "auto", display: "inline-block", paddingBottom: "50px"}}><Image src={bannerLogo}/></div>
            <Image src={banner} fluid />
            </div>
            <div className='contact-button-container'>
              <Button animated size='big' primary style={{paddingTop: "10px"}}>
                  <Button.Content visible>Contact Us</Button.Content>
                  <Button.Content hidden>
                      <Icon name='talk' />
                  </Button.Content>
              </Button>
            </div>
      </div>
    );
  }
}

export default HomePage;