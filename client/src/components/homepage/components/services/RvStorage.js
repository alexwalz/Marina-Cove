import React from 'react'
import {Image, Container, Header, Grid} from 'semantic-ui-react'
import Navbar from '../../../global/navigation/View'
import bannerImage from '../../../../images/banner_rv.jpg'
import servicesDivider from '../../../../images/marina-cove-services_divider_alpha.png'
import StorageCard from './StorageCard'
import Footer from '../../../global/navigation/Footer'


const RVStorage =()=>{
    return(
        <div>
            <Navbar/>
            <Image src={bannerImage} centered style={{paddingTop: "120px"}}/>
            <Image src={servicesDivider} centered style={{padding: "20px 0px 0px 0px"}}/>

            <Container>

                    <div style={{paddingLeft: "15%", paddingRight: "15%", marginTop: "50px"}}>
                        <Header style={{fontSize: "2rem", color: "#1E1E1E", textAlign: "center"}}>The best and most affordable RV storage is Marina Cove</Header>
                        <div style={{padding: "20px 0px 60px 0px"}}>
                            <p style={{fontSize: "1.2rem", color: "lightgrey"}}>Do you need a convenient, safe, secure place to store your RV? Marina Cove Storage offers RV storage, conveniently located in American Fork Utah just off the 15 freeway. With plenty of space available to store your RV we also provide Boat Storage and Car Storage in the same location. Marina Cove Storage provides comfortable RV parking and trailer storage for all types of RV’s, and 24/7 video surveillance so you never have to worry.</p>
                        </div>
                    </div>

                    <Header style={{fontWeight: "bold", fontSize: "2.3rem"}}>Prices</Header>
                    <hr/>

                    <Grid centered columns={2} stackable style={{paddingBottom: "40px", marginTop: "40px"}}>
                        
                        <Grid.Row centered columns={3}>
                        <Grid.Column>
                        <StorageCard primaryColor='#121F2D' secondaryColor='#212F3E' title='Outdoor Storage Units' subtitle="25 Feet and Under" price='65.00' />
                        </Grid.Column>
                        <Grid.Column>
                        <StorageCard primaryColor='#1F1F3C' secondaryColor='#2F2F4E' title='Outdoor Storage Units' subtitle="Over 25 feet" price='115.00' />
                        </Grid.Column>
                        </Grid.Row>

                    </Grid>

            </Container>

            <Footer/>

        </div>
    )
}

export default RVStorage