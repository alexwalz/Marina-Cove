import React from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import logo from '../../../images/Marina_Cove_Logo-237x300.png'
import Navbar from '../navigation/View'

const Footer = ()=>{
    return(
        <div style={{postion: "relative", width: "100%", backgroundColor: "#1E1E1E", textAlign: "center"}}>
            <Grid columns='equal' style={{padding: "30px 40px 10px 40px"}}>

                <Grid.Column>
                    <Image src={logo}/>
                </Grid.Column>

                <Grid.Column width={8} verticalAlign='middle' >
                    <div style={{verticalAlign: "middle"}}>
                        <h1 style={{color: "white", fontSize: "3rem"}}>Marina Cove</h1>
                        <div style={{paddingBottom: "20px", color: "white", fontWeight: "bold"}}>
                            <p>22 East 1500 South</p>
                            <p>American Fork, UT 84003</p>
                            <p>(801) 230-7452</p>
                        </div>
                        
                        <Button.Group>
                            <Button color='blue' inverted href='https://goo.gl/maps/V4rL4NMfnQu' target='_blank'>Directions</Button>
                            <Button.Or />
                            <Button color='blue' inverted href='/contact' target='_blank'>Contact Us</Button>
                        </Button.Group>
)
                    </div>
                </Grid.Column>

                <Grid.Column>
                </Grid.Column>

            </Grid>

        </div>
    )
}

export default Footer 