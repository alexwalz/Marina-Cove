import React from 'react'
import {Image, Grid, Container, Header} from 'semantic-ui-react'
import Navbar from '../../../global/navigation/View'
import Footer from '../../../global/navigation/Footer'
import bannerImage from '../../../../images/banner_boat.jpg'
import servicesDivider from '../../../../images/marina-cove-services_divider_alpha.png'
import StorageCard from './StorageCard'
import logo from '../../../../images/DSC08774-1-1024x575.jpg'

const BoatStorage =()=>{
    return(
        <div>
            <Navbar/>
            <Image src={bannerImage} centered style={{paddingTop: "120px"}}/>
            <Image src={servicesDivider} centered style={{padding: "20px 0px 0px 0px"}}/>

            <Container>

                <div style={{paddingLeft: "15%", paddingRight: "15%", paddingTop: "75px", paddingBottom: "75px"}}>

                    <Header style={{fontSize: "2rem", color: "#1E1E1E", fontFamily: "'Roboto Slab', serif" }}>Boat storage made easy</Header>
                    
                    <p style={{fontSize: "1.2rem", color: "lightgrey"}}>Don’t haul your expensive ski-surf boat and trailer 
                    from your house, across town and down the busy freeway, it’s frustrating, time consuming and dangerous. 
                    Our facility is located right next to Utah Lake in American Fork. Let us store it at Marina Cove where it 
                    stays out of the heat, wind and snow and is secure from theft and vandalism. Just think how great it would 
                    be if the people in your neighborhood didn’t know you had a boat. No more youth outings designed to destroy 
                    your prop.</p>
                </div>

            </Container>

            <Image src={logo} centered/>

            <Container>

                    <Grid columns={2} centered stackable style={{marginTop: "50px", marginBottom: "100px"}}>
                    
                        <Grid.Row centered>

                            <Grid.Column>
                                
                                <Header style={{fontSize: "2rem", color: "#1E1E1E"}}>Winterization</Header>
                                <hr/>
                               <p style={{fontSize: "1.2rem", color: "lightgrey"}}>Our company’s standard winterization includes: add Star 
                               Tron fuel enzyme stabilizer to fuel tank (non ethanol to help stabilize fuel over storage season), run motor 
                               (when possible – some boats may not start but we can still make the water system safe for winter storage), 
                               replace water from cooling system with RV non-toxic antifreeze, and then we fog the motor which helps protect 
                               internal engine parts during storage and prevents corrosion of surfaces inside engine.</p>
                               
                               <p style={{fontSize: "1.2rem", color: "lightgrey"}}>Other items (at a bit extra cost) we can winterize other water systems: showers, sinks, heaters, etc.</p>

                            </Grid.Column>

                            <Grid.Column>

                                <Header style={{fontSize: "2rem", color: "#1E1E1E"}}>Shrink Wrap</Header>
                                <hr/>
                               <p style={{fontSize: "1.2rem", color: "lightgrey"}}>Shrink wrap protects against weather damage, moisture absorbing 
                               bags and vents used (not by most competitors). Wrap guaranteed to hold and keep your boat dry for Utah’s entire harsh 
                               winter season!* It’s waterproof– it can fully encapsulate just about anything, cost effective – considered better 
                               then indoor storage, 100% virgin resin shrink wrap with maximum UV inhibitors, You can’t afford NOT to shrink wrap 
                               your boat or RV.</p>

                               
                               <p style={{fontSize: "1.2rem", color: "lightgrey"}}>We wrap past the rub rail using 7 mil plastic (many use 6 mil, not good!) 
                               we do top quality work using masts and strapping to build a good slope. The utmost care is taken while in and around 
                               your boat. We take off our shoes and roll out the red carpet! *We can wrap the entire side wall, prep for transportation, 
                               and add moisture bags upon request. Some items may charge a bit extra.</p>

                            </Grid.Column>

                        </Grid.Row>

                    </Grid>


            
                <Grid centered stackable style={{paddingBottom: "40px", marginTop: "100px"}}>

                    <Grid.Row columns={4} centered>

                        <Grid.Column centered>
                            <StorageCard primaryColor='#121F2D' secondaryColor='#212F3E' title='Outdoor Storage' subtitle="25 Feet and Under" price='50.00' />
                        </Grid.Column>

                        <Grid.Column centered>
                            <StorageCard primaryColor='#1F1F3C' secondaryColor='#2F2F4E' title='Outdoor Storage' subtitle="Over 25 Feet" price='75.00' />
                        </Grid.Column>

                        <Grid.Column centered>
                            <StorageCard primaryColor='#1F1F2D' secondaryColor='#2F2F3E' title='Outdoor Storage' subtitle="Includes Boat Winterization" price='99.00' />
                        </Grid.Column>

                        <Grid.Column centered>
                            <StorageCard primaryColor='#1F1F3C' secondaryColor='#2F2F4E' title='Indoor Storage' subtitle="Includes Free Spring Detail" price='250.00' />
                        </Grid.Column>

                    </Grid.Row>
{/* 
                    <Grid.Row columns={3} centered>

                        <Grid.Column centered>
                            <StorageCard primaryColor='#1F1F3C' secondaryColor='#2F2F4E' title='Indoor Storage' subtitle="Includes Free Spring Detail" price='250.00' />
                        </Grid.Column>

                    </Grid.Row> */}

                </Grid>

            </Container>

            <Footer/>

        </div>
    )
}

export default BoatStorage