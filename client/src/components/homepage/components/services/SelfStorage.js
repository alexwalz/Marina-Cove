import React from 'react'
import {Image, Grid, Container} from 'semantic-ui-react'
import Navbar from '../../../global/navigation/View'
import bannerImage from '../../../../images/self_storage_utah.jpg'
import servicesDivider from '../../../../images/marina-cove-services_divider_alpha.png'
import Footer from '../../../global/navigation/Footer'
import StorageCard from './StorageCard'
import {Link} from 'react-router-dom'


const SelfStorage =()=>{
    return(
        <div>
            <Navbar/>
            
            <Image src={bannerImage} centered style={{paddingTop: "120px"}}/>
            <Image src={servicesDivider} centered style={{padding: "20px 0px 0px 0px"}}/>

            <div style={{marginTop: '100px', marginBottom: "100px"}}>

                <Container>


                    <div style={{padding: "0px 40px 60px 40px"}}>
                        <p style={{fontSize: "1.5rem"}}>Here at Marina Cove, we offer a wide variety of storage options! Storing your boat and other vehicles is a 
                            perfect way to keep them safe from months of snow and wind. <Link to='/boat-storage'>Boat Storage</Link> is simple and easy, and we’ll help 
                            you every step of the way. If you’re wanting to store other <Link to='rv-storage'>large vehicles or RVs</Link> we offer storage options 
                            for those as well, and if you’re just wanting to store a bunch of random stuff we have no problem with that! 
                            Many people just don’t have room for everything, which is why we offer self-storage as well.</p>
                    </div>

                    <Grid centered stackable>

                        <Grid.Row columns={3} centered>

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

                        <Grid.Row columns={3} centered>

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