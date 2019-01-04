import React from 'react'
import {Link} from 'react-router-dom'
import { Grid, Image, Container, Button, Segment, Header, Icon } from 'semantic-ui-react'
import boatIcon from '../../../images/icon_boat.png'
import boxIcon from '../../../images/icon_box.png'
import rvIcon from '../../../images/icon_rv.png'

const AboutServices = () =>{

    return(

        <Container style={{marginTop: "50px"}}>
            <Grid columns={3}centered stackable>
                <Grid.Row centered>

                    <Grid.Column>
                        <Segment placeholder color='blue'  style={{minHeight: '550px', paddingBottom: '15px'}}>
                            <Image src={boxIcon} centered/>
                            <Header>Self Storage</Header>
                            <p>Reserve your self-storage unit today! Marina Cove is a new American Fork storage facility conveniently located just off the 15 freeway. We have multiple sized storage units for your personal storage and moving needs. Out units are dry, clean, and secure to protect your valuable items that you place in them.</p>
                            <Link to='/self-storage'><Button size='large' animated primary style={{position: 'absolute', bottom: '15px', right: '10px', paddingTop: "10px"}}>
                                <Button.Content visible>Learn More</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='graduation' />
                                </Button.Content>
                            </Button></Link>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column>
                        <Segment placeholder color='blue' style={{minHeight: '550px', paddingBottom: '15px'}}>
                            <Image src={boatIcon} centered/>
                            <Header>Boat Storage</Header>
                            <p>Winter here and it is time to winterize your boat and put it in storage until next season. At Marina Cove Storage, we not only offer a place for you to put your boat into storage in Utah, but we also offer winterization services and shrink wrap services. We are conveniently located in American Fork, just off the I15 freeway. If you are in Utah County, Salt Lake City, Draper, or American Fork, our facilities and services are perfect for you.</p>
                            <Link to='/boat-storage'><Button size='large' animated primary style={{position: 'absolute', bottom: '15px', right: '10px', paddingTop: "10px"}}>
                                <Button.Content visible>Learn More</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='graduation' />
                                </Button.Content>
                            </Button></Link>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column>
                        <Segment placeholder color='blue'  style={{minHeight: '550px', paddingBottom: '15px'}}>
                            <Image src={rvIcon} centered/>
                            <Header>Outdoor RV Storage</Header>
                            <p>Do you need a convenient, safe, secure place to store your RV. Marina Cove Storage offers RV storage, we are a convenient American Fork storage facility located off of the 15 freeway. With plenty of space available to store your RV we can also provide Boat Storage and Car Storage in the same location. Prices start at just $3.00 per foot and there is no limit on the length of your RV.</p>
                            <Link to='/rv-storage'><Button size='large' animated primary style={{position: 'absolute', bottom: '15px', right: '10px', paddingTop: "10px"}}>
                                <Button.Content visible>Learn More</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='graduation' />
                                </Button.Content>
                            </Button></Link>
                        </Segment>
                    </Grid.Column>

                </Grid.Row>
            </Grid>

        </Container>
    )

}

export default AboutServices