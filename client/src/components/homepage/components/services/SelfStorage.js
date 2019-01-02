import React from 'react'
import {Image, Grid, Container, Header} from 'semantic-ui-react'
import Navbar from '../../../global/navigation/View'
import bannerImage from '../../../../images/self_storage_utah.jpg'
import servicesDivider from '../../../../images/marina-cove-services_divider_alpha.png'
import Footer from '../../../global/navigation/Footer'
import StorageCard from './StorageCard'
import logo from '../../../../images/MARINA-COVE-260x315.png'


const SelfStorage =()=>{
    return(
        <div>
            <Navbar/>
            
            <Image src={bannerImage} centered style={{paddingTop: "120px"}}/>
            <Image src={servicesDivider} centered style={{padding: "20px 0px 0px 0px"}}/>

            <div style={{marginTop: '50px'}}>

                <Container>
                    <div style={{paddingLeft: "15%", paddingRight: "15%"}}>
                        <Header style={{fontSize: "2rem", color: "#1E1E1E", textAlign: "center"}}>If you own it, we have a place to store it</Header>
                        <div style={{padding: "20px 0px 60px 0px"}}>
                            <p style={{fontSize: "1.2rem", color: "lightgrey"}}> Our units are dry, clean, and secure to protect your valuable items that you place in them. We’re here to take care of your storage with the least hassle and worry possible!</p>
                        </div>
                    </div>

                    <Grid columns={3} stackable centered style={{marginTop: "100px", marginBottom: "160px"}}>
                    
                        <Grid.Row stretched centered>

                            <Grid.Column>
                                
                               <Header style={{fontSize: "1.5rem"}}>24/7 Video Surveillance</Header>
                               <p style={{fontSize: "1.2rem", color: "lightgrey"}}>Our facility is monitored 24/7 at all entrances and exits as well as throughout the compound.  We do this to help keep 
                               your units safe from vandelism and theft.</p>
                               
                               <Header style={{fontSize: "1.5rem"}}>24/7 Access</Header>
                               <p style={{fontSize: "1.2rem", color: "lightgrey"}}>We understand that people need access to their stuff at all hours of the day.  Because of this, we allow for 
                               access to your storage unit at all hours of the day and night.</p>
                            </Grid.Column>

                            <Grid.Column>

                                <Image src={logo} centered/>

                            </Grid.Column>

                            <Grid.Column>

                               <Header style={{fontSize: "1.5rem"}}>Onsite Property Management</Header>
                               <p style={{fontSize: "1.2rem", color: "lightgrey"}}>Have questions, comments or conncerns?  No problem.  We have our staff onsite and are available to provide assistance during business hours.</p>
                               <Header style={{fontSize: "1.5rem"}}>Indoor Storage Units</Header>
                               <p style={{fontSize: "1.2rem", color: "lightgrey"}}>We know that people store more than just RV's and boats.  We offer indoor storage units that protect your stuf from natures harsh elements.</p>

                            </Grid.Column>

                        </Grid.Row>

                    </Grid>

                    <Header style={{fontWeight: "bold", fontSize: "2.3rem"}}>Prices</Header>
                    <hr/>

                    <Grid centered stackable columns={2} style={{paddingBottom: "40px", marginTop: "40px"}}>

                        <Grid.Row columns={4} centered>

                            <Grid.Column centered>
                                <StorageCard primaryColor='#121F2D' secondaryColor='#212F3E' title='Indoor Storage Units' subtitle="SIZE: 10'X10' BY 12' TALL" price='79.00' />
                            </Grid.Column>

                            <Grid.Column centered>
                                <StorageCard primaryColor='#1F1F3C' secondaryColor='#2F2F4E' title='Indoor Storage Units' subtitle="SIZE: 12'X20' BY 12' TALL" price='125.00' />
                            </Grid.Column>

                            <Grid.Column centered>
                                <StorageCard primaryColor='#1F1F2D' secondaryColor='#2F2F3E' title='Indoor Storage Units' subtitle="SIZE: 12'X30' BY 12' TALL" price='225.00' />
                            </Grid.Column>

                        </Grid.Row>

                        <Grid.Row columns={4} centered>

                            <Grid.Column>
                                <StorageCard primaryColor='#121F2D' secondaryColor='#212F3E' title='Indoor Storage Units' subtitle="SIZE: 12'X40' BY 12' TALL" price='300.00' />
                            </Grid.Column>

                            <Grid.Column>
                                <StorageCard primaryColor='#1F1F3C' secondaryColor='#2F2F4E' title='Indoor Storage Units With Power' subtitle="SIZE: 12'X40' BY 12' TALL" price='125.00' />
                            </Grid.Column>

                            <Grid.Column>
                                <StorageCard primaryColor='#1F1F2D' secondaryColor='#2F2F3E' title='Outdoor Storage Units' subtitle="BASE ON FOOT AREA NEEDED" price='50.00 / $75.00' />
                            </Grid.Column>

                        </Grid.Row>

                    </Grid>

                </Container>

            </div>

            <Footer/>

        </div>
    )
}

export default SelfStorage