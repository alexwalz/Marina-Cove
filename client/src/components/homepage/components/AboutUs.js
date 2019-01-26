import React from 'react'
import {Image, Container, Segment, Grid, Divider, Button, Icon} from 'semantic-ui-react'
import PhotoGallery from './PhotoGallery'
import Navbar from '../../global/navigation/View'
import AboutLogo from '../../../images/about_marina_cove_divider.png'
import locationPhoto from '../../../images/convenient_location-1.jpg'



const AboutUs =()=>{

    const quote1 = 'Marina Cove Storage is everything you would expect in premium storage.  Great service, clean storage and convenient location.'
    const quote1Author = 'Kurt Roberts'

    const quote2 = "Couldn't be happier with the service I recieve.  Friendly and knowledgeable staff."
    const quote2Author = 'Alex Walz'


    return(
        <div>
            <Navbar/>

            <Image src={AboutLogo} centered style={{marginTop: "100px"}} />
            <Image src={locationPhoto} centered style={{marginTop: "100px", marginBottom: "50px"}}/>

            <Container style={{marginTop: '50px'}}>

                <div style={{fontSize: '1.5rem', marginBottom: "40px", padding: "95px"}}>
                    <p><strong>Marina Cove Storage</strong> is right next to Utah Lake, a convenient place to store anything, especially boats.
                    These storage units are perfect for residents of American Fork, Lehi, Cedar Hills, Pleasant Grove,  Alpine or 
                    Highland. The Storage Units are located a short distance from the I15 freeway and are quick and easy to access.</p>
                    
                    <p>Our West American Fork storage facility is protected day and night by 24hour surveillance and gated keypad / remote entry.
                    We have onsite management that is always available to assist you with any questions.</p>

                </div>

                <Segment placeholder stacked style={{backgroundColor: "#FCD78B"}}>
                    <Grid columns={2} stackable textAlign='center'>
                        <Divider vertical>And</Divider>
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column textAlign='center' verticalAlign='middle'>
                                <h2>"{quote1}"</h2>
                                <br/>
                                <p style={{color: "white"}}><em>-{quote1Author}</em></p>
                            </Grid.Column>

                            <Grid.Column textAlign='center' verticalAlign='middle'>
                                <h2>"{quote2}"</h2>
                                <br/>
                                <p style={{color: "white"}}><em>-{quote2Author}</em></p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <div style={{marginLeft: "auto", marginRight: "auto", marginTop: "35px", marginBottom: "100px", textAlign: 'center'}}>

                    <Button animated size='big'>
                        <Button.Content visible>Contact Us</Button.Content>
                        <Button.Content hidden>
                            <Icon name='talk' />
                        </Button.Content>
                    </Button>
                    
                </div>

                <PhotoGallery/>

            </Container>

            <div style={{margin: "100px"}}></div>

        </div>
    )
}

export default AboutUs