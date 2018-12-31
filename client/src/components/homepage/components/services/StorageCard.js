import React from 'react'
import { Card, Button, Header, Icon } from 'semantic-ui-react'

const StorageCard =(props)=>{
    return(
            <Card style={{color: "white"}}>

            
                <Card.Content style={{backgroundColor: props.primaryColor, height: "160px", textAlign: "center"}}>
                    <Header style={{color: "white", fontSize: "2rem"}}>{props.title}</Header>
                    <p>{props.subtitle}</p>
                </Card.Content>

                <Card.Content style={{backgroundColor: props.secondaryColor, color: "white", height: "200px", textAlign: "center"}}>
                    <div style={{marginTop: "20px"}}>
                        <Header style={{fontSize: "3.5rem", color: "white"}}>${props.price}</Header>
                        <Header style={{color: "white", marginTop: "-15px"}}>Monthly Plan</Header>
                    </div>
                </Card.Content>
                

                <Card.Content extra style={{backgroundColor: "#121F2D", color: "white", height: "90px", textAlign: "center", verticalAlign: "middle"}}>
                    <Button animated  href='/contact' target='_blank' size='huge' style={{marginTop: "5px", color: "white", backgroundColor: props.secondaryColor, verticalAlign: "middle"}}>
                        <Button.Content visible>Contact Us</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                </Card.Content>

            </Card>
    )
}

export default StorageCard